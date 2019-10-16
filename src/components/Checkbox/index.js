import React from 'react';

import { Container, Input } from './styles';

export default function Checkbox({children, text}) {
  return (
    <Container htmlFor="checkbox">
      <Input id="checkbox" type="checkbox" />
      {
        !!text && (
          <span>
            {text}
          </span>
        )
      }
    </Container>
  );
}
