import React from 'react';

import { Container } from './styles';

export default function Button({text, icon = false, ...rest}) {
  return (
    <Container {...rest}>
      {icon}
      {text}
    </Container>
  );
}
