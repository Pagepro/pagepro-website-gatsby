import styled from 'styled-components';

import { decorLink, checkbox } from '../../../common/mixins';

const variables = {
  checkboxSize: '1.25rem',
  radioMarkSize: '0.5rem',
};

const RadioGroupStyled = styled.div`
  ${checkbox}
`;

const RadioLabelStyled = styled.label`
  color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  padding-left: calc(${variables.checkboxSize} * 0.95 + 1rem);

  a {
    color: ${props => props.theme.colors.white};
    ${decorLink}
  }

  &::before,
  &::after {
    border-radius: 3.125rem;
  }

  &::before {
    border: 2px solid ${props => props.theme.colors.navy};
    width: ${variables.checkboxSize};
    height: ${variables.checkboxSize};
  }

  &::after {
    top: 0.375rem;
    left: 0.375rem;
    width: ${variables.radioMarkSize};
    height: ${variables.radioMarkSize};
    background: transparent;
  }
`;

const RadioInputStyled = styled.input`
  &:checked + ${RadioLabelStyled}::after {
    background: ${props => props.theme.colors.white};
  }
`;

export { RadioGroupStyled, RadioInputStyled, RadioLabelStyled };
