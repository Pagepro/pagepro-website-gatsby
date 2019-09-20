import React from 'react'
import PropTypes from 'prop-types'
import DynamicComponent from '../../common/DynamicComponent'
import theme from '../../themes/theme'

const {
  typo1,
  typo2,
  typo3,
  typo4,
  typo5,
  typo6,
  typo7,
} = theme.textStyles

export const Typo1 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo1} {...props}>
      {children}
    </DynamicComponent>
  )
}

export const Typo2 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo2} {...props}>
      {children}
    </DynamicComponent>
  )
}

export const Typo3 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo3} {...props}>
      {children}
    </DynamicComponent>
  )
}

export const Typo4 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo4} {...props}>
      {children}
    </DynamicComponent>
  )
}

export const Typo5 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo5} {...props}>
      {children}
    </DynamicComponent>
  )
}

export const Typo6 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo6} {...props}>
      {children}
    </DynamicComponent>
  )
}

export const Typo7 = props => {
  const {
    children,
  } = props
  return (
    <DynamicComponent {...typo7} {...props}>
      {children}
    </DynamicComponent>
  )
}

Typo1.propTypes = {
  children: PropTypes.node.isRequired,
}

Typo2.propTypes = {
  children: PropTypes.node.isRequired,
}

Typo3.propTypes = {
  children: PropTypes.node.isRequired,
}

Typo4.propTypes = {
  children: PropTypes.node.isRequired,
}

Typo5.propTypes = {
  children: PropTypes.node.isRequired,
}

Typo6.propTypes = {
  children: PropTypes.node.isRequired,
}

Typo7.propTypes = {
  children: PropTypes.node.isRequired,
}
