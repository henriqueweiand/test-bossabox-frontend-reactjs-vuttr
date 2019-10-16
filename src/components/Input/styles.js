import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
`;

export const Label = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #000;
  width: 100%;
  padding: 5px;
  height: ${props => props.height ? props.height : 'auth'}
`;
