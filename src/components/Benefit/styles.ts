import styled from 'styled-components';

const variables = {
  borderColor: '#0E3145',
};

const BenefitStyled = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 2.5rem;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 2.5rem;
    display: flex;
    height: 100%;
    width: calc(100% - 2.5rem);
    z-index: 0;
    content: '';
    background: ${variables.borderColor};
  }
`;

const BenefitTitleStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  color: ${props => props.theme.colors.red};
`;

const BenefitDescriptionStyled = styled.div`
  position: relative;
  margin-top: 1rem;
  color: ${props => props.theme.colors.white};
`;

export { BenefitStyled, BenefitDescriptionStyled, BenefitTitleStyled };
