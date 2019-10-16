import React, {useState} from 'react';

import {MdAdd} from "react-icons/md";

import Title from '~/components/Title';
import News from '~/components/News';
import Subtitle from '~/components/Subtitle';
import SearchIput from '~/components/SearchIput';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import ModalCreate from '~/pages/Main/components/Create';
import ModalRemove from '~/pages/Main/components/Remove';

import { Container, Heading, Tools, Tool } from './styles';

const data = [
  {
    title: 'titulo da noticia',
    descriiption: 'descriçao da noticia',
    tags: [
      'node', 'react', 'php'
    ]
  },
  {
    title: 'titulo da noticia2',
    descriiption: 'descriçao da noticia',
    tags: [
      'node', 'react', 'php'
    ]
  },
]

export default function Main({ children }) {
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);

  function handleAdd() {
    setModalCreate(true);
  }

  function handleRemove() {
    setModalRemove(true);
  }

  return (
    <Container>
      { !!modalCreate && <ModalCreate onClose={setModalCreate} open={modalCreate} />}
      { !!modalRemove && <ModalRemove onClose={setModalRemove} open={modalRemove} />}

      <Heading>
        <Title size="4rem">VUTTR</Title>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
      </Heading>

      <Tools>
        <Tool>
          <SearchIput />
          <Checkbox text="search in tags only" />
        </Tool>
        <Button onClick={handleAdd} icon={<MdAdd />} border text="Add" />
      </Tools>

      <div className="news">
        {
          data.map(item => <News onRemove={handleRemove} key={Math.floor(Math.random() * 10)} data={item} />)
        }
      </div>
    </Container>
  );
}
