import React from 'react';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};
