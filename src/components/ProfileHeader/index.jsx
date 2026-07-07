import React from 'react';

import { Container, Title, Subtitle } from './styles';

const ProfileHeader = ({ title = 'Perfil', subtitle = 'Resumo do usuário' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export { ProfileHeader };
