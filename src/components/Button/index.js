import React from 'react';

import { Container } from './styles';

export default function Title({children, text}) {
  return (
    <Container>
      {text}
    </Container>
  );
}
