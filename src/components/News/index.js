import React from 'react';

import Box from '~/components/Box';
import Subtitle from '~/components/Subtitle';
import Button from '~/components/Button';

// import { Container } from './styles';

export default function News({children, data}) {
  return (
    <Box as="section" elevation>
      <Subtitle>{data.title}</Subtitle>
      <div>{data.descriiption}</div>
      <div>{data.tags.map(tag => <span>{tag}</span>)}</div>
      <Button text="Remove" icon="remove" />
    </Box>
  );
}
