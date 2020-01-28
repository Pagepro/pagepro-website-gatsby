import styled from 'styled-components';

const ClientsStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2.5rem 3.5rem;
  align-items: center;
  justify-items: center;
`;

const ClientsItemStyled = styled.li``;

export { ClientsStyled, ClientsItemStyled };
