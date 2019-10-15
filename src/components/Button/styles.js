import styled from 'styled-components';

export const Container = styled.button`
  color: #000;
  padding: 5px 10px;
  font-size: 1.5rem;
  border-width:${props => props.border ? `1px 5px 5px 1px` : 0};

  svg {
    font-size: 1.5rem;
  }
`;
