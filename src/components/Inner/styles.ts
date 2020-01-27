import styled from 'styled-components';

export const variables = {
  inner: '60.75rem',
};

const InnerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${variables.inner};
`;

export { InnerStyled };
