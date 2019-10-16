import React from 'react';

import { Container, Input } from './styles';

export default function Checkbox({onChange, text}) {
  function handleChange(evt) {
    onChange(evt.target.checked);
  }

  return (
    <Container htmlFor="checkbox">
      <Input id="checkbox" type="checkbox" onChange={handleChange} />
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
