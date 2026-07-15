import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfileStats } from "../../components/ProfileStats";
import { ProfileSkills } from "../../components/ProfileSkills";
import { ProfileProjects } from "../../components/ProfileProjects";
import { ProfileCourses } from "../../components/ProfileCourses";
import { ImageViewer } from "../../components/ImageViewer";
import { ImageMenu } from "../../components/ImageMenu";
import { api } from "../../services/api";

import { Container, ProfileContentCard } from "./styles";

const Profile = () => {
  const navigate = useNavigate();

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageMenu, setImageMenu] = useState(null);

  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const saveImage = async (field, imageUrl) => {
    try {
      const updatedUser = {
        ...loggedUser,
        [field]: imageUrl,
      };

      const { data } = await api.put(`/users/${loggedUser.id}`, updatedUser);

      localStorage.setItem("loggedUser", JSON.stringify(data));

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar imagem.");
    }
  };

  const handleAvatarSelected = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageBase64 = await convertToBase64(file);

    await saveImage("avatar", imageBase64);
  };

  const handleCoverSelected = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageBase64 = await convertToBase64(file);

    await saveImage("cover", imageBase64);
  };

  return (
    <>
      <Header autenticado={true} />

      <Container>
        <ProfileHeader
          user={loggedUser}
          onEdit={() => navigate("/profile/edit")}
          onAvatarClick={() =>
            setSelectedImage(
              loggedUser?.avatar || "https://i.pravatar.cc/200?img=32"
            )
          }
          onCoverClick={() =>
            setSelectedImage(
              loggedUser?.cover || "https://picsum.photos/1200/400"
            )
          }
          onAvatarCameraClick={() => setImageMenu("avatar")}
          onCoverCameraClick={() => setImageMenu("cover")}
        />

        <ProfileContentCard>
          <ProfileStats />
          <div style={{ marginBottom: "30px" }}>
  <p
    style={{
      color: "#cfcfcf",
      lineHeight: "1.6",
      marginBottom: "20px",
    }}
  >
    {loggedUser?.bio || "Nenhuma biografia cadastrada."}
  </p>

  {loggedUser?.location && (
    <p style={{ color: "#cfcfcf", marginBottom: "10px" }}>
      📍 {loggedUser.location}
    </p>
  )}

  {loggedUser?.github && (
    <p style={{ marginBottom: "10px" }}>
      💻{" "}
      <a href={loggedUser.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </p>
  )}

  {loggedUser?.linkedin && (
    <p style={{ marginBottom: "10px" }}>
      🔗{" "}
      <a href={loggedUser.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </p>
  )}

  {loggedUser?.portfolio && (
    <p>
      🌐{" "}
      <a href={loggedUser.portfolio} target="_blank" rel="noreferrer">
        Portfólio
      </a>
    </p>
  )}
</div>

          <ProfileSkills skills={loggedUser?.skills || []} />

          <ProfileProjects />

          <ProfileCourses />

        </ProfileContentCard>
       <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "40px",
    marginBottom: "50px",
  }}
>
  <button
    onClick={() => navigate("/profile/edit")}
    style={{
      background: "#6f00ff",
      color: "#fff",
      border: "none",
      padding: "14px 32px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      transition: "0.3s",
    }}
  >
    Edite seu  Perfil
  </button>

  <button
  onClick={() => navigate("/feed")}
  style={{
    background: "transparent",
    color: "#fff",
    border: "2px solid #6f00ff",
    padding: "14px 32px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.3s",
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
          onView={() => {
            setSelectedImage(
              imageMenu === "avatar"
                ? loggedUser?.avatar || "https://i.pravatar.cc/200?img=32"
                : loggedUser?.cover || "https://picsum.photos/1200/400"
            );

            setImageMenu(null);
          }}
          onUpload={() => {
            if (imageMenu === "avatar") {
              avatarInputRef.current.click();
            } else {
              coverInputRef.current.click();
            }

            setImageMenu(null);
          }}
          onRemove={async () => {
            if (imageMenu === "avatar") {
              await saveImage("avatar", "");
            } else {
              await saveImage("cover", "");
            }

            setImageMenu(null);
          }}
          onClose={() => setImageMenu(null)}
        />
      )}

      <input
        type="file"
        accept="image/*"
        ref={avatarInputRef}
        style={{ display: "none" }}
        onChange={handleAvatarSelected}
      />

      <input
        type="file"
        accept="image/*"
        ref={coverInputRef}
        style={{ display: "none" }}
        onChange={handleCoverSelected}
      />
    </>
  );
};

export default Profile;