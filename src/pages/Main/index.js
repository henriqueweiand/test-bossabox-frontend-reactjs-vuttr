import React from 'react';

import {MdAdd} from "react-icons/md";

import Title from '~/components/Title';
import News from '~/components/News';
import Subtitle from '~/components/Subtitle';
import SearchIput from '~/components/SearchIput';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Modal from '~/components/Modal';

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
  return (
    <Container>

      <Heading>
        <Title size="4rem">VUTTR</Title>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
      </Heading>

      <Tools>
        <Tool>
          <SearchIput />
          <Checkbox text="search in tags only" />
        </Tool>
        <Button icon={<MdAdd />} border text="Add" />
      </Tools>

      <div className="news">
        {
          data.map(item => <News data={item} />)
        }
      </div>
    </Container>
  );
}
