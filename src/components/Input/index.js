import React from 'react';

import { Container, Input as InputStyle, Label } from './styles';

export default function Input({label, name, height, as = 'input', onChange}) {
  return (
    <Container htmlFor={`input-${name}`}>
      {label && <Label>{label}</Label>}
      <InputStyle
        name={name}
        onChange={onChange}
        height={height}
        as={as}
        id={`input-${name}`}
      />
    </Container>
  );
}
