import React from 'react'
import styled from 'styled-components'

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
  tag,
  children,
  ...props }) => {
    const WithComponent = StyledDynamicComponent.withComponent(tag)
    return <WithComponent {...props}>{children}</WithComponent>
}

DynamicComponent.defaultProps = {
  tag: 'p'
}

export default DynamicComponent
