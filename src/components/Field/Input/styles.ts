import styled from 'styled-components';

import { fieldReset } from '../../../common/mixins';

const variables = {
  fieldHeight: '3.375rem',
};

const InputStyled = styled.input`
  ${fieldReset}
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;
  font-weight: ${props => props.theme.fontWeights.regular};
  padding: 1rem;
  background: ${props => props.theme.colors.navy};
  height: ${variables.fieldHeight};

  &::placeholder {
    color: ${props => props.theme.colors.blue};
  }
`;

export default InputStyled;
