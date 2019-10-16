import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
  font-size: 1.5rem;
`;

export const Header = styled.h2`
  width: 100%;
  font-size: 2rem;
`;

export const Body = styled.div`
  label {
    margin: 2rem 0;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: center;
	align-content: stretch;

  button + button {
    margin-left: 2rem;
  }
`;
