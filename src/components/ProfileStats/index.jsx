import React from 'react';

import { Container, Card, Label, Value } from './styles';

const ProfileStats = ({ items = [] }) => {
  return (
    <Container>
      {items.map((item) => (
        <Card key={item.label}>
          <Value>{item.value}</Value>
          <Label>{item.label}</Label>
        </Card>
      ))}
    </Container>
  );
};

export { ProfileStats };
