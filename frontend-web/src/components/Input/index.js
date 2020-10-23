import React from 'react';

import { Container } from './style';

function Input({ icon, name, ...restOfProps }) {
  const Icon = icon;

  return (
    <Container>
      <Icon />

      <input {...restOfProps} />
    </Container>
  );
}

export default Input;
