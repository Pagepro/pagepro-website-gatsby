import styled from 'styled-components';

import Container from '../Container';

const variables = {
  borderColor: '#0E3145',
};

const BenefitStyled = styled(Container)`
  position: relative;
  width: 100%;

  &::before {
    position: absolute;
    top: 0;
    left: 2.5rem;
    display: flex;
    height: 100%;
    width: calc(100% - 2.5rem);
    content: '';
    background: ${variables.borderColor};
  }
`;

const BenefitTitleStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.red};
`;

const BenefitDescriptionStyled = styled.div`
  position: relative;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export { BenefitStyled, BenefitDescriptionStyled, BenefitTitleStyled };
