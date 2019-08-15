import React from 'react'

import PropTypes from 'prop-types'
import {
  FieldInputStyled,
} from './FieldStyledComponents'

const Input = ({
  ...props
}) => (
  <FieldInputStyled
    {...props}
  />
)

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input
