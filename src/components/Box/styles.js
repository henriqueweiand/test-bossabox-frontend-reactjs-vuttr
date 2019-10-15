import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  ${(props) => {
    return props.elevation && `
      -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      :hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
    `
  }}


`;
