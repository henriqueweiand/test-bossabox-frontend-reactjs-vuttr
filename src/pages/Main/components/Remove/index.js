import React from 'react';

import Modal from '~/components/Modal';
import Button from '~/components/Button';

import { Container, Header, Body, Footer } from './styles';

export default function Remove({open, data, ...rest}) {
  return (
    <Modal {...rest} display={open ? 1 : 0}>
      <Container>
        <Header>
          X Remove tool
        </Header>

        <Body>
          Are you sure want to remove {data.title}
        </Body>

        <Footer>
          <Button border onClick={() => rest.onClose(false)} text="Cancel" />
          <Button border onClick={() => rest.onRemove(data)} text="Yes, remove" />
        </Footer>
      </Container>
    </Modal>
  );
}
