import React from 'react';

import {IoIosClose} from "react-icons/io";
import Button from '~/components/Button';

import { Container, Title, Description, Tag } from './styles';

export default function News({children, data}) {
  return (
    <Container as="section" elevation>
      <div className="header">
        <Title href="#">{data.title}</Title>
        <Button text="Remove" icon={<IoIosClose />} />
      </div>
      <Description>{data.descriiption}</Description>
      <div className="tags">{data.tags.map(tag => <Tag>#{tag}</Tag>)}</div>
    </Container>
  );
}
