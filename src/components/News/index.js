import React from 'react';

import {MdClose} from "react-icons/md";
import Button from '~/components/Button';

import { Container, Title, Description, Tag } from './styles';

export default function News({children, toogleModal, data}) {
  return (
    <Container as="section" elevation="true">
      <div className="header">
        <Title href={data.link} target="_blank">{data.title}</Title>
        <Button text="Remove" icon={<MdClose />} onClick={() => toogleModal(true)} />
      </div>
      {
        data.description && <Description>{data.description}</Description>
      }
      <div className="tags">{data.tags.map(tag => <Tag key={tag}>#{tag}</Tag>)}</div>
    </Container>
  );
}
