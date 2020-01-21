import styled from 'styled-components';

const variables = {
  width: '3.125rem',
};

const TechnologiesStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${variables.width}, 1fr));
  grid-gap: 2.5rem 3.5rem;
  align-items: center;
  justify-items: center;
`;

const TechnologiesItemStyled = styled.li``;

export { TechnologiesStyled, TechnologiesItemStyled };
