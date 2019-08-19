import styled from "styled-components"

import { decorLink, checkbox } from "../../../common/mixins"

const RadioGroupStyled = styled.div`
  ${checkbox}
`

const RadioLabelStyled = styled.label`
  color: ${props => props.theme.color.navy6};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  padding-left: calc(${props => props.theme.form.checkboxSize} * .95
  + ${props => props.theme.size.gutter});

  a {
    color: ${props => props.theme.color.white};
    ${decorLink}
  }

  &::before {
    border: 2px solid ${props => props.theme.color.navy5};
    width: ${props => props.theme.form.checkboxSize};
    height: ${props => props.theme.form.checkboxSize};
    border-radius: 50px;
  }

  &::after {
    top: 6px;
    left: 6px;
    width: ${props => props.theme.form.radioMarkSize};
    height: ${props => props.theme.form.radioMarkSize};
    background: transparent;
    border-radius: 50px;
  }
`

const RadioInputStyled = styled.input`
  &:checked + ${RadioLabelStyled}::after {
    background: ${props => props.theme.color.white};
  }
`

export {
  RadioGroupStyled,
  RadioInputStyled,
  RadioLabelStyled
}
