import React from 'react';

import { Container, Input, Label } from './styles';

export default function Title({label, name, height, as = 'input'}) {
  return (
    <Container htmlFor={`input-${name}`}>
      {label && <Label>{label}</Label>}
      <Input height={height} as={as} id={`input-${name}`} />
    </Container>
  );
}
