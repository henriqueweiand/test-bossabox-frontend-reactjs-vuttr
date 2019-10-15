import React from 'react';

import { Container } from './styles';

export default function Box({children, ...rest}) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}
