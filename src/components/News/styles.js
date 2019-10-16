import styled from 'styled-components';

export const Title = styled.a`
  font-size: 2rem;
  text-decoration: underline;
`;

export const Container = styled.div`
  padding: 1.5rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  ${(props) => {
    return !!props.elevation && `
      -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      :hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
    `
  }}

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  div.tags {
    margin-top: 1rem;
  }

  div.tags > span + span {
    margin-left: 5px;
  }
`;

export const Description = styled.div`
  font-size: 1.5rem;
`;

export const Tag = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;
