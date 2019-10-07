import * as React from 'react'
import {
  RadioGroupStyled,
  RadioInputStyled,
  RadioLabelStyled,
} from './styledComponents'

interface IProps {
  id: string
}

const Radio: React.FC<IProps> = ({
  id,
  children
}) => (
  <RadioGroupStyled>
    <RadioInputStyled
      type="radio"
      {...{ id }}
    />
    <RadioLabelStyled htmlFor={id}>
      {children}
    </RadioLabelStyled>
  </RadioGroupStyled>
)

export default Radio
