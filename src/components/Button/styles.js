import styled from 'styled-components';

export const Container = styled.button`
  color: #000;
  padding: 5px 15px;
  font-size: 14px;
  border-width:${props => props.border ? `1px 5px 5px 1px` : 0};
`;
