import styled from 'styled-components'

import { fieldReset } from '../../common/mixins'

// input
const FieldInputStyled = styled.input`
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

// checkbox
const FieldCheckboxGroupStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FieldCheckboxInputStyled = styled.input`
`
const FieldCheckboxLabelStyled = styled.label`
  font-size: 14px;
  color: ${props => props.theme.color.navy6};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

export {
  FieldInputStyled,
  FieldCheckboxGroupStyled,
  FieldCheckboxInputStyled,
  FieldCheckboxLabelStyled,
}
