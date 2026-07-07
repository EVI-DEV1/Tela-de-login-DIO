import React from 'react';

import { Container, Title, List, Item } from './styles';

const ProfileSkills = ({ title = 'Habilidades', skills = [] }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {skills.map((skill) => (
          <Item key={skill}>{skill}</Item>
        ))}
      </List>
    </Container>
  );
};

export { ProfileSkills };
