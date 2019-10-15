import React from 'react';

import { Container } from './styles';

export default function Checkbox({children, text}) {
  return (
    <Container for="checkbox">
      <input id="checkbox" type="checkbox" />
      search in tags only
    </Container>
  );
}
