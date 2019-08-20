import React from 'react'

import PropTypes from 'prop-types'
import {
  CheckboxGroupStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled,
} from './styledComponents'

const Checkbox = ({
  inputId,
  label
}) => (
  <CheckboxGroupStyled>
    <CheckboxInputStyled
      type="checkbox"
      id={inputId}
    />
    <CheckboxLabelStyled htmlFor={inputId}>
      {label}
    </CheckboxLabelStyled>
  </CheckboxGroupStyled>
)

Checkbox.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.object,
}

export default Checkbox
