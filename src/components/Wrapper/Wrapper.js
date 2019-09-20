import React from 'react'

import PropTypes from 'prop-types'
import WrapperStyled from './styledComponents'

const Wrapper = ({
  children,
  ...styles
}) => (
  <WrapperStyled style={styles}>
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
