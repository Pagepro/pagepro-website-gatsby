import React from 'react'

import PropTypes from 'prop-types'
import { WrapperStyled } from './styledComponents'

const Wrapper = ({
  children,
  ...otherProps
}) => {
  return (
    <WrapperStyled style={{
      ...otherProps
    }}>
      {children}
    </WrapperStyled>
  )
}

Wrapper.propTypes = {
  background: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.node,
}

export default Wrapper
