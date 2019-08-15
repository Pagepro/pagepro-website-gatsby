import React from 'react'

import PropTypes from 'prop-types'
import { InputStyled } from './InputStyledComponents'

const Input = ({ ...props }) => (
  <InputStyled {...props}/>
)

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input
