import styled from 'styled-components';

import { fieldReset } from '../../../common/mixins';

const variables = {
  fieldHeight: '3.375rem',
};

const InputStyled = styled.input`
  ${fieldReset}
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  padding: 1rem;
  background: ${({ theme }) => theme.colors.navy};
  height: ${variables.fieldHeight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default InputStyled;
