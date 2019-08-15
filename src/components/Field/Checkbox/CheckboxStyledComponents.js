import styled from "styled-components"

import {
  decorLink,
  transition
} from "../../../common/mixins"

const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CheckboxLabelStyled = styled.label`
  position: relative;
  font-size: 14px;
  color: ${props => props.theme.color.navy6};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  cursor: pointer;
  padding-left: calc(${props => props.theme.form.checkboxSize} * .95
  + ${props => props.theme.size.gutter});

  a {
    color: ${props => props.theme.color.white};
    ${decorLink}
  }

  &::before,
  &::after {
    position: absolute;
    display: flex;
    flex-shrink: 0;
    content: '';
    ${transition}
  }

  &::before {
    top: 0;
    left: 0;
    border: 2px solid ${props => props.theme.color.navy5};
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
  position: absolute;
  opacity: 0;
  overflow: hidden;

  &:checked + ${CheckboxLabelStyled}::after {
    border-color: ${props => props.theme.color.white};
  }
`

export {
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled
}
