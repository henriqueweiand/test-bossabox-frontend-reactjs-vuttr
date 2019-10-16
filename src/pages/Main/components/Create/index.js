import React from 'react';

import Modal from '~/components/Modal';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, Header, Body, Footer } from './styles';

export default function Create({open, ...rest}) {
  return (
    <Modal {...rest} display={open ? 1 : 0}>
      <Container>
        <Header>
          + Add new tool
        </Header>

        <Body>

          <Input label="Tool name" value="" name="name" />
          <Input label="Tool Link" value="" name="link" />
          <Input height="10rem" as="textarea" label="Tool Description" value="" name="description" />
          <Input label="Tags" value="" name="tag" />

        </Body>

        <Footer>
          <Button border onClick={() => rest.onClose(false)} text="Cancel" />
          <Button border text="Add tool" />
        </Footer>
      </Container>
    </Modal>
  );
}
