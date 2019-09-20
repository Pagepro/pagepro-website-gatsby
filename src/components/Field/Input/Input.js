import React from 'react'
import PropTypes from 'prop-types'
import InputStyled from './styledComponents'

const Input = ({ ...props }) => (
  <InputStyled {...props} />
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input
