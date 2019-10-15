import React from 'react';

import {MdSearch} from "react-icons/md";

import { Container, Input } from './styles';

export default function Title({children}) {
  return (
    <Container for="input">
      <MdSearch />
      <Input id="input" placeholder="search" />
    </Container>
  );
}
