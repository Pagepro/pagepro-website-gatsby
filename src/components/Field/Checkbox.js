import React from 'react'

import PropTypes from 'prop-types'
import {
  FieldCheckboxGroupStyled,
  FieldCheckboxInputStyled,
  FieldCheckboxLabelStyled,
} from './FieldStyledComponents'

const Checkbox = ({
    inputId,
    label
  }) => (
  <FieldCheckboxGroupStyled>
    <FieldCheckboxInputStyled
      type="checkbox"
      id={inputId}
    />
    <FieldCheckboxLabelStyled
      htmlFor={inputId}
    >
      {label}
    </FieldCheckboxLabelStyled>
  </FieldCheckboxGroupStyled>
)

Checkbox.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.string,
}

export default Checkbox
