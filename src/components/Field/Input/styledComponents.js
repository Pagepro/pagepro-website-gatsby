import styled from "styled-components"

import { fieldReset } from "../../../common/mixins"
import theme from '../../../themes/theme'

const InputStyled = styled.input`
  ${fieldReset}
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: ${theme.fontWeight.regular};
  padding: 0 calc(${props => props.theme.size.gutter} * 1.125);
  background: ${theme.color.navy4};
  height: ${theme.form.fieldHeight};

  &::placeholder {
    color: ${theme.color.navy6};
  }
`

export {
  InputStyled,
}
