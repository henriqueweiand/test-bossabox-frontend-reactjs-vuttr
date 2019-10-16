import React from 'react';

import { Container, Modal } from './styles';

export default function News({children, display, onClose}) {
  return (
    <Container display={display}>
      <Modal>{children}</Modal>
    </Container>
  );
}
