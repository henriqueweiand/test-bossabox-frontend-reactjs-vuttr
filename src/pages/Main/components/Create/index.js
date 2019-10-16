import React, {useState} from 'react';
import * as Yup from 'yup';

import Modal from '~/components/Modal';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, Header, Body, Footer } from './styles';

export default function Create({open, ...rest}) {
  const [form, setForm] = useState({});

  const schema = Yup.object().shape({
    title: Yup.string().required('Title required'),
    link: Yup.string().required('Link required'),
    description: Yup.string().required('Description required'),
    tags: Yup.string().required('Tags required'),
  });

  async function handleSubmit(data) {
    const validForm = await schema.isValid({...form});

    if (validForm) {
      rest.onSave({
        ...form,
        tags: form.tags.split(' '),
      });
    } else {
      alert('All field are requireds');
    }
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

        <Body context={{form}} schema={schema} onSubmit={handleSubmit}>

          <Input label="Tool title" value="" name="title" onChange={onChange} />
          <Input label="Tool Link" value="" name="link" onChange={onChange} />
          <Input
            height="10rem"
            as="textarea"
            multiline
            label="Tool Description"
            value=""
            name="description"
            onChange={onChange}
          />
          <Input
            placeholder="Enter tags with space"
            label="Tags"
            value=""
            name="tags"
            onChange={onChange}
          />

        </Body>

        <Footer>
          <Button border onClick={() => rest.onClose(false)} text="Cancel" />
          <Button border type="submit" text="Add tool" onClick={() => handleSubmit()} />
        </Footer>
      </Container>
    </Modal>
  );
}
