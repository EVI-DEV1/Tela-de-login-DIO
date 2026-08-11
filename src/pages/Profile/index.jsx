import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import defaultAvatar from "../../assets/avatar-default.svg";

import Header from "../../components/Header";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfileStats } from "../../components/ProfileStats";
import { ProfileSkills } from "../../components/ProfileSkills";
import { ProfileProjects } from "../../components/ProfileProjects";
import { ProfileCourses } from "../../components/ProfileCourses";
import { ImageViewer } from "../../components/ImageViewer";
import { ImageMenu } from "../../components/ImageMenu";

import { api } from "../../services/api";

import {
  Container,
  ProfileContentCard,
} from "./styles";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

const Profile = () => {
  const navigate = useNavigate();

  const loggedUser = JSON.parse(
    localStorage.getItem("loggedUser")
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageMenu, setImageMenu] = useState(null);
  const [isSavingImage, setIsSavingImage] =
    useState(false);

  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = () =>
        reject(new Error("Não foi possível ler a imagem."));

      reader.readAsDataURL(file);
    });
  };

  const validateImage = (file) => {
    if (!file.type.startsWith("image/")) {
      alert("Selecione um arquivo de imagem.");
      return false;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      alert("A imagem deve ter no máximo 2 MB.");
      return false;
    }

    return true;
  };

  const saveImage = async (field, imageBase64) => {
    if (!loggedUser?.id) {
      alert("Faça login novamente.");
      navigate("/login");
      return;
    }

    try {
      setIsSavingImage(true);

      const updatedUser = {
        ...loggedUser,
        [field]: imageBase64,
      };

      const { data } = await api.put(
        `/users/${loggedUser.id}`,
        updatedUser
      );

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(data)
      );

      window.location.reload();
    } catch (error) {
      console.error("Erro ao salvar imagem:", error);
      alert("Não foi possível salvar a imagem.");
    } finally {
      setIsSavingImage(false);
    }
  };

  const handleImageSelected = async (
    event,
    field
  ) => {
    const file = event.target.files?.[0];

    if (!file || !validateImage(file)) {
      event.target.value = "";
      return;
    }

    try {
      const imageBase64 = await convertToBase64(file);
      await saveImage(field, imageBase64);
    } catch (error) {
      console.error(error);
      alert("Não foi possível processar a imagem.");
    } finally {
      event.target.value = "";
    }
  };

  const handleViewImage = () => {
    if (imageMenu === "avatar") {
      setSelectedImage(
        loggedUser?.avatar || defaultAvatar
      );
    }

    if (imageMenu === "cover") {
      if (!loggedUser?.cover) {
        alert("Nenhuma foto de capa foi adicionada.");
      } else {
        setSelectedImage(loggedUser.cover);
      }
    }

    setImageMenu(null);
  };

  const handleUploadImage = () => {
    if (imageMenu === "avatar") {
      avatarInputRef.current?.click();
    }

    if (imageMenu === "cover") {
      coverInputRef.current?.click();
    }

    setImageMenu(null);
  };

  const handleRemoveImage = async () => {
    const confirmed = window.confirm(
      imageMenu === "avatar"
        ? "Deseja remover sua foto de perfil?"
        : "Deseja remover sua foto de capa?"
    );

    if (!confirmed) return;

    if (imageMenu === "avatar") {
      await saveImage("avatar", "");
    }

    if (imageMenu === "cover") {
      await saveImage("cover", "");
    }

    setImageMenu(null);
  };

  if (!loggedUser) {
    return (
      <>
        <Header variant="home" />

        <Container>
          <ProfileContentCard>
            <p style={{ color: "#ffffff" }}>
              Sua sessão terminou. Faça login novamente.
            </p>

            <button
              type="button"
              onClick={() => navigate("/login")}
            >
              Ir para o login
            </button>
          </ProfileContentCard>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header variant="feed" />

      <Container>
        <ProfileHeader
          user={loggedUser}
          onAvatarClick={() =>
            setSelectedImage(
              loggedUser.avatar || defaultAvatar
            )
          }
          onCoverClick={() => {
            if (loggedUser.cover) {
              setSelectedImage(loggedUser.cover);
            }
          }}
          onAvatarCameraClick={() =>
            setImageMenu("avatar")
          }
          onCoverCameraClick={() =>
            setImageMenu("cover")
          }
        />

        <ProfileContentCard>
          <p
            style={{
              color: "#cfcfcf",
              lineHeight: "1.6",
              marginBottom: "26px",
            }}
          >
            {loggedUser.bio ||
              "Nenhuma biografia cadastrada."}
          </p>

          {loggedUser.location && (
            <p
              style={{
                color: "#cfcfcf",
                marginBottom: "24px",
              }}
            >
              📍 {loggedUser.location}
            </p>
          )}

          <ProfileStats />

          <ProfileSkills
            skills={loggedUser.skills || []}
          />

          <ProfileProjects />

          <ProfileCourses />
        </ProfileContentCard>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "14px",
            margin: "28px 0 50px",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/profile/edit")}
            style={{
              background: "#6f00ff",
              color: "#ffffff",
              border: "none",
              padding: "14px 32px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Editar Perfil
          </button>

          <button
            type="button"
            onClick={() => navigate("/feed")}
            style={{
              background: "transparent",
              color: "#ffffff",
              border: "2px solid #6f00ff",
              padding: "12px 32px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Voltar ao Feed
          </button>
        </div>
      </Container>

      {selectedImage && (
        <ImageViewer
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {imageMenu && (
        <ImageMenu
          onView={handleViewImage}
          onUpload={handleUploadImage}
          onRemove={handleRemoveImage}
          onClose={() => setImageMenu(null)}
        />
      )}

      <input
        type="file"
        accept="image/*"
        ref={avatarInputRef}
        style={{ display: "none" }}
        disabled={isSavingImage}
        onChange={(event) =>
          handleImageSelected(event, "avatar")
        }
      />

      <input
        type="file"
        accept="image/*"
        ref={coverInputRef}
        style={{ display: "none" }}
        disabled={isSavingImage}
        onChange={(event) =>
          handleImageSelected(event, "cover")
        }
      />
    </>
  );
};

export default Profile;