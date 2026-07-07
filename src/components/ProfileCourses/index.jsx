import React from 'react';

import { Container, Title, List, Item, Name, Description } from './styles';

const ProfileCourses = ({ title = 'Cursos', courses = [] }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {courses.map((course) => (
          <Item key={course.name}>
            <Name>{course.name}</Name>
            <Description>{course.description}</Description>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export { ProfileCourses };
