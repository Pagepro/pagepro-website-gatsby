import styled from "styled-components"

import { fieldReset } from "../../../common/mixins"

const InputStyled = styled.input`
  ${fieldReset}
  color: ${props => props.theme.color.white};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeight.regular};
  padding: 0 calc(${props => props.theme.size.gutter} * 1.125);
  background: ${props => props.theme.color.navy4};
  height: ${props => props.theme.form.fieldHeight};

  &::placeholder {
    color: ${props => props.theme.color.navy6};
  }
`

export {
  InputStyled,
}
