import React from 'react';
import PropTypes from 'prop-types';

import { Container, Modal as ModalStyle } from './styles';

export default function Modal({children, display}) {
  return (
    <Container display={display}>
      <ModalStyle>{children}</ModalStyle>
    </Container>
  );
}

Modal.defaultProps = {
  display: false
};

Modal.propTypes = {
  display: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
};
