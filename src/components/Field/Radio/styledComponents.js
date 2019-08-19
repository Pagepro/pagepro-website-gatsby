import styled from "styled-components"

import { decorLink, checkbox } from "../../../common/mixins"
import theme from '../../../themes/theme'

const RadioGroupStyled = styled.div`
  ${checkbox}
`

const RadioLabelStyled = styled.label`
  color: ${theme.color.navy6};
  font-weight: ${theme.fontWeight.semiBold};
  padding-left: calc(${props => props.theme.form.checkboxSize} * .95
  + ${props => props.theme.size.gutter});

  a {
    color: ${theme.color.white};
    ${decorLink}
  }

  &::before {
    border: 2px solid ${props => props.theme.color.navy5};
    width: ${theme.form.checkboxSize};
    height: ${theme.form.checkboxSize};
    border-radius: 50px;
  }

  &::after {
    top: 6px;
    left: 6px;
    width: ${theme.form.radioMarkSize};
    height: ${theme.form.radioMarkSize};
    background: transparent;
    border-radius: 50px;
  }
`

const RadioInputStyled = styled.input`
  &:checked + ${RadioLabelStyled}::after {
    background: ${theme.color.white};
  }
`

export {
  RadioGroupStyled,
  RadioInputStyled,
  RadioLabelStyled
}
