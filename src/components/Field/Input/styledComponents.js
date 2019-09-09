import styled from "styled-components"

import { fieldReset } from "../../../common/mixins"

const InputStyled = styled.input`
  ${fieldReset}
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize14};
  font-weight: ${props => props.theme.fontWeight.regular};
  padding: ${props => props.theme.size.gutter};
  background: ${props => props.theme.color.navy};
  height: ${props => props.theme.form.fieldHeight};

  &::placeholder {
    color: ${props => props.theme.color.blue};
  }
`

export {
  InputStyled,
}
