import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input as InputStyle, Label } from './styles';

export default function Input({label, placeholder, name, height, as, onChange}) {
  return (
    <Container htmlFor={`input-${name}`}>
      {label && <Label>{label}</Label>}
      <InputStyle
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        height={height}
        as={as}
        id={`input-${name}`}
      />
    </Container>
  );
}

Input.defaultProps = {
  as: 'input',
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  as: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
