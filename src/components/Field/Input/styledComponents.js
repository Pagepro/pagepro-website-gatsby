import styled from "styled-components"

import { fieldReset } from "../../../common/mixins"
import theme from '../../../themes/theme'

const InputStyled = styled.input`
  ${fieldReset}
  color: ${theme.color.white};
  font-size: ${theme.fontSize14};
  font-weight: ${theme.fontWeight.regular};
  padding: ${theme.size.gutter};
  background: ${theme.color.navy4};
  height: ${theme.form.fieldHeight};

  &::placeholder {
    color: ${theme.color.navy6};
  }
`

export {
  InputStyled,
}
