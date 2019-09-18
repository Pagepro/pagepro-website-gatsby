import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  lineHeight,
  fontSize,
  color,
  textStyle,
  fontWeight,
  textAlign,
} from 'styled-system'

const tag = ''

const StyledDynamicComponent = styled(tag)`
  ${lineHeight}
  ${fontSize}
  ${color}
  ${textStyle}
  ${fontWeight}
  ${textAlign}
`

const DynamicComponent = ({
  newTag,
  children,
  ...props
}) => {
  const WithComponent = StyledDynamicComponent.withComponent(newTag)
  return <WithComponent {...props}>{children}</WithComponent>
}

DynamicComponent.propTypes = {
  tag: PropTypes.string,
  newTag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

DynamicComponent.defaultProps = {
  tag: 'p',
  newTag: 'p',
}

export default DynamicComponent
