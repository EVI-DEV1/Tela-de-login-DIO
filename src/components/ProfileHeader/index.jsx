import React from "react";
import { FaCamera } from "react-icons/fa";

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
  return (
    <Container>
      <CoverContainer>
        <Cover image={user?.cover} onClick={onCoverClick} />

        <CoverButton
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onCoverCameraClick();
          }}
        >
          <FaCamera />
        </CoverButton>
      </CoverContainer>

      <Content>
        <AvatarWrapper>
          <AvatarContainer>
            <Avatar
              src={user?.avatar || "https://i.pravatar.cc/200?img=32"}
              alt={user?.name || "Perfil"}
              onClick={onAvatarClick}
            />

            <CameraButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAvatarCameraClick();
              }}
            >
              <FaCamera />
            </CameraButton>
          </AvatarContainer>
        </AvatarWrapper>

        <UserInfo>
          <div>
            <Name>{user?.name || "Usuário"}</Name>
          </div>

          <ProfileLinks>
            {user?.github && (
              <InfoItem>
                💻{" "}
                <a href={user.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </InfoItem>
            )}

            {user?.linkedin && (
              <InfoItem>
                🔗{" "}
                <a href={user.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </InfoItem>
            )}

            {user?.portfolio && (
              <InfoItem>
                🌐{" "}
                <a href={user.portfolio} target="_blank" rel="noreferrer">
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