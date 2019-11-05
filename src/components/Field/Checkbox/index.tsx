import React from 'react'

import {
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled,
} from './styles'

interface IProps {
  id: string
}

const Checkbox: React.FC<IProps> = ({
  id,
  children,
}) => (
  <CheckboxGroupStyled>
    <CheckboxInputStyled
      type="checkbox"
      {...{ id }}
    />
    <CheckboxLabelStyled htmlFor={id}>
      {children}
    </CheckboxLabelStyled>
  </CheckboxGroupStyled>
)

export default Checkbox
