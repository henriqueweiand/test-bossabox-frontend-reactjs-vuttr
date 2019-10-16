import React from 'react';

import { Container, Input, Label } from './styles';

export default function Title({label, name, height, as = 'input', onChange}) {
  return (
    <Container htmlFor={`input-${name}`}>
      {label && <Label>{label}</Label>}
      <Input
        name={name}
        onChange={onChange}
        height={height}
        as={as}
        id={`input-${name}`}
      />
    </Container>
  );
}
