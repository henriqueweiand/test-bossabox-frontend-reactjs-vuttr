import React from 'react';

import Modal from '~/components/Modal';

// import { Container } from './styles';

export default function Remove({open}) {
  return (
    <Modal display={!!open}>
      Remove
    </Modal>
  );
}
