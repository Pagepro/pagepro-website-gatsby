import styled from "styled-components"

import { decorLink, checkbox } from "../../../common/mixins"

const CheckboxGroupStyled = styled.div`
  ${checkbox}
`

const CheckboxLabelStyled = styled.label`
  color: ${props => props.theme.color.blue};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  padding-left: calc(${props => props.theme.form.checkboxSize} * .95
  + ${props => props.theme.gutter.gutter16});

  a {
    color: ${props => props.theme.color.white};
    ${decorLink}
  }

  &::before {
    border: 2px solid ${props => props.theme.color.navy};
    width: ${props => props.theme.form.checkboxSize};
    height: ${props => props.theme.form.checkboxSize};
  }

  &::after {
    top: 3px;
    left: 7px;
    width: ${props => props.theme.form.checkboxMarkWidth};
    height: ${props => props.theme.form.checkboxMarkHeight};
    transform: rotate(45deg);
    border: solid transparent;
    border-width: 0 2px 2px 0;
  }
`

const CheckboxInputStyled = styled.input`
  &:checked + ${CheckboxLabelStyled}::after {
    border-color: ${props => props.theme.color.white};
  }
`

export {
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled
}
