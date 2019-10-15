import styled from 'styled-components';

export const Container = styled.label`
  border: 1px solid #000;
  padding: 3px;
  display: flex;
	flex-wrap: nowrap;
  align-items: center;

  svg {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  padding-left: 5px;
`;
