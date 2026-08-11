import React from "react";
import { FaCamera } from "react-icons/fa";

import defaultAvatar from "../../assets/avatar-default.svg";

import {
  Container,
  Cover,
  Avatar,
  AvatarWrapper,
  AvatarContainer,
  CameraButton,
  Content,
  UserInfo,
  Name,
  CoverContainer,
  CoverButton,
  ProfileLinks,
  InfoItem,
} from "./styles";

const ProfileHeader = ({
  user,
  onAvatarClick,
  onCoverClick,
  onAvatarCameraClick,
  onCoverCameraClick,
}) => {
  const avatarSource = user?.avatar || defaultAvatar;

  return (
    <Container>
      <CoverContainer>
        <Cover
          image={user?.cover}
          onClick={onCoverClick}
          role={user?.cover ? "button" : undefined}
          title={
            user?.cover
              ? "Visualizar foto de capa"
              : "Adicione uma foto de capa"
          }
        />

        <CoverButton
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onCoverCameraClick?.();
          }}
          aria-label="Alterar foto de capa"
          title="Alterar foto de capa"
        >
          <FaCamera />
        </CoverButton>
      </CoverContainer>

      <Content>
        <AvatarWrapper>
          <AvatarContainer>
            <Avatar
              src={avatarSource}
              alt={
                user?.name
                  ? `Foto de ${user.name}`
                  : "Avatar padrão"
              }
              onClick={onAvatarClick}
            />

            <CameraButton
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onAvatarCameraClick?.();
              }}
              aria-label="Alterar foto de perfil"
              title="Alterar foto de perfil"
            >
              <FaCamera />
            </CameraButton>
          </AvatarContainer>
        </AvatarWrapper>

        <UserInfo>
          <Name>{user?.name || "Usuário"}</Name>

          <ProfileLinks>
            {user?.github && (
              <InfoItem>
                💻{" "}
                <a
                  href={user.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </InfoItem>
            )}

            {user?.linkedin && (
              <InfoItem>
                🔗{" "}
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </InfoItem>
            )}

            {user?.portfolio && (
              <InfoItem>
                🌐{" "}
                <a
                  href={user.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfólio
                </a>
              </InfoItem>
            )}
          </ProfileLinks>
        </UserInfo>
      </Content>
    </Container>
  );
};

export { ProfileHeader };