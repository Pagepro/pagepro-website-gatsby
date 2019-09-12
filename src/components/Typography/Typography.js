import React from 'react'
import DynamicComponent from '../../common/DynamicComponent'
import theme from '../../themes/theme'

const {
  typo1,
  typo2,
  typo3,
  typo4,
  typo5,
  typo6,
  typo7
} = theme.textStyles

export const Typo1 = props => (
  <DynamicComponent {...typo1} {...props}>
    {props.children}
  </DynamicComponent>
)

export const Typo2 = props => (
  <DynamicComponent {...typo2} {...props}>
    {props.children}
  </DynamicComponent>
)

export const Typo3 = props => (
  <DynamicComponent {...typo3} {...props}>
    {props.children}
  </DynamicComponent>
)

export const Typo4 = props => (
  <DynamicComponent {...typo4} {...props}>
    {props.children}
  </DynamicComponent>
)

export const Typo5 = props => (
  <DynamicComponent {...typo5} {...props}>
    {props.children}
  </DynamicComponent>
)

export const Typo6 = props => (
  <DynamicComponent {...typo6} {...props}>
    {props.children}
  </DynamicComponent>
)

export const Typo7 = props => (
  <DynamicComponent {...typo7} {...props}>
    {props.children}
  </DynamicComponent>
)
