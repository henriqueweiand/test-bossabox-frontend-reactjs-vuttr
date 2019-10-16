import React, {useState} from 'react';

import Modal from '~/components/Modal';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, Header, Body, Footer } from './styles';

export default function Create({open, ...rest}) {
  const [form, setForm] = useState({});

  function submit() {
    rest.onSave({
      ...form,
      tags: form.tags.split(' '),
    });
  }

  function onChange(evt) {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <Modal {...rest} display={open ? 1 : 0}>
      <Container>
        <Header>
          + Add new tool
        </Header>

        <Body>

          <Input label="Tool title" value="" name="title" onChange={onChange} />
          <Input label="Tool Link" value="" name="link" onChange={onChange} />
          <Input
            height="10rem"
            as="textarea"
            label="Tool Description"
            value=""
            name="description"
            onChange={onChange}
          />
          <Input label="Tags" value="" name="tags" onChange={onChange} />

        </Body>

        <Footer>
          <Button border onClick={() => rest.onClose(false)} text="Cancel" />
          <Button border text="Add tool" onClick={() => submit()} />
        </Footer>
      </Container>
    </Modal>
  );
}
