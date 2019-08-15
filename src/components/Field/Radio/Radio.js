import React from 'react'

import PropTypes from 'prop-types'
import {
  RadioGroupStyled,
  RadioInputStyled,
  RadioLabelStyled,
} from './RadioStyledComponents'

const Radio = ({
    inputId,
    label,
  }) => (
  <RadioGroupStyled>
    <RadioInputStyled
      type="radio"
      id={inputId}
    />
    <RadioLabelStyled htmlFor={inputId}>
      {label}
    </RadioLabelStyled>
  </RadioGroupStyled>
)

Radio.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.string,
}

export default Radio
