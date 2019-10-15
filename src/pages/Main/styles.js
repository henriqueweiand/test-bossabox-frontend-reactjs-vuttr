import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 3rem;

  div.news section {
    margin-top: 2rem;
  }
`;

export const Heading = styled.div`
  padding: 2rem 0;

  h1 + h2 {
    margin-top: 1rem;
  }
`;

export const Tools = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
  align-items: center;
`;

export const Tool = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;

  label + label {
    padding-left: 10px;
  }
`;

