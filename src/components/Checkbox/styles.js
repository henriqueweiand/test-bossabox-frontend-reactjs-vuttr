import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;

  input + span {
    margin-left: 5px;
  }

  span {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input``;
