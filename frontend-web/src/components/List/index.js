import React from 'react';

import { Container, Item, Title } from './styles';

const List = ({ title, elements = [] }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      <Item>{elements}</Item>
    </Container>
  );
};

export default List;
