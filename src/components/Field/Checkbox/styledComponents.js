import styled from "styled-components"

import { decorLink, checkbox } from "../../../common/mixins"
import theme from '../../../themes/theme'

const CheckboxGroupStyled = styled.div`
  ${checkbox}
`

const CheckboxLabelStyled = styled.label`
  color: ${theme.color.navy6};
  font-weight: ${theme.fontWeight.semiBold};
  padding-left: calc(${theme.form.checkboxSize} * .95
  + ${theme.size.gutter});

  a {
    color: ${theme.color.white};
    ${decorLink}
  }

  &::before {
    border: 2px solid ${theme.color.navy5};
    width: ${theme.form.checkboxSize};
    height: ${theme.form.checkboxSize};
  }

  &::after {
    top: 3px;
    left: 7px;
    width: ${theme.form.checkboxMarkWidth};
    height: ${theme.form.checkboxMarkHeight};
    transform: rotate(45deg);
    border: solid transparent;
    border-width: 0 2px 2px 0;
  }
`

const CheckboxInputStyled = styled.input`
  &:checked + ${CheckboxLabelStyled}::after {
    border-color: ${theme.color.white};
  }
`

export {
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled
}
