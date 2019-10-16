import React from 'react';
import PropTypes from 'prop-types';

import {MdClose} from "react-icons/md";
import Button from '~/components/Button';

import { Container, Title, Description, Tag } from './styles';

export default function News({children, toogleModal, data, search}) {
  return (
    <Container as="section" elevation="true">
      <div className="header">
        <Title href={data.link} target="_blank">{data.title}</Title>
        <Button text="Remove" icon={<MdClose />} onClick={() => toogleModal(data)} />
      </div>
      {
        data.description && <Description>{data.description}</Description>
      }
      <div className="tags">
        {data.tags.map(tag => (
          <Tag key={tag} highlight={search === tag}>
            #{tag}
          </Tag>
          )
        )}
      </div>
    </Container>
  );
}

News.defaultProps = {
  display: false
};

News.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  search: PropTypes.string,
};
