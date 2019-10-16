import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({text, icon, ...rest}) {
  return (
    <Container {...rest}>
      {icon}
      {text}
    </Container>
  );
}

Button.defaultProps = {
  icon: false
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};
