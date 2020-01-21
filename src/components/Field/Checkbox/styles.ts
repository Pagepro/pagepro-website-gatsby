import styled from 'styled-components';

import { decorLink, checkbox } from '../../../common/mixins';

const variables = {
  checkboxSize: '1.25rem',
  checkboxMarkWidth: '0.375rem',
  checkboxMarkHeight: '0.6875rem',
};

const CheckboxGroupStyled = styled.div`
  ${checkbox}
`;

const CheckboxLabelStyled = styled.label`
  color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  padding-left: calc(${variables.checkboxSize} * 0.95 + 1rem);

  a {
    color: ${props => props.theme.colors.white};
    ${decorLink}
  }

  &::before {
    border: 2px solid ${props => props.theme.colors.navy};
    width: ${variables.checkboxSize};
    height: ${variables.checkboxSize};
  }

  &::after {
    top: 0.1875rem;
    left: 0.4375rem;
    width: ${variables.checkboxMarkWidth};
    height: ${variables.checkboxMarkHeight};
    transform: rotate(45deg);
    border: solid transparent;
    border-width: 0 2px 2px 0;
  }
`;

const CheckboxInputStyled = styled.input`
  &:checked + ${CheckboxLabelStyled}::after {
    border-color: ${props => props.theme.colors.white};
  }
`;

export { CheckboxGroupStyled, CheckboxInputStyled, CheckboxLabelStyled };
