import React from 'react';

import Title from '~/components/Title';
import News from '~/components/News';
import Subtitle from '~/components/Subtitle';
import SearchIput from '~/components/SearchIput';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';

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
        <Title size="3rem">VUTTR</Title>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
      </Heading>

      <Tools>
        <Tool>
          <SearchIput />
          <Checkbox text="search in tags only" />
        </Tool>
        <Button text="Add" icon="add" />
      </Tools>

      {
        data.map(item => <News data={item} />)
      }
    </Container>
  );
}
