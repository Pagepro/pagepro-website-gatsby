import React from 'react'

import PropTypes from 'prop-types'
import WrapperStyled from './styledComponents'

const Wrapper = ({
  children,
  ...otherProps
}) => (
  <WrapperStyled style={{
    ...otherProps }}
  >
    {children}
  </WrapperStyled>
)


Wrapper.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Wrapper.defaultProps = {
  background: '',
  padding: '',
}

export default Wrapper
