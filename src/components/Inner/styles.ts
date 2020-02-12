import styled from 'styled-components';

const InnerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${({ theme }) => theme.sizes.inner};
`;

export { InnerStyled };
