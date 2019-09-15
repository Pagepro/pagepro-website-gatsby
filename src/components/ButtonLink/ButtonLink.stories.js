import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import ButtonLink from './ButtonLink'
import { types, sizes } from './styledComponents'

storiesOf('ButtonLink', module)
  .add('default', () => {
    const defaultProps = {
      btnLabel: text('Button label', 'Hire Us'),
      type: select('Type', {
        primary: types.primary,
        secondary: types.secondary,
        outline: types.outline,
      }, 'primary'),
      size: select('Size', {
        medium: sizes.medium,
        big: sizes.big,
      }, 'medium'),
      left: boolean('isLeft', false),
    }

    return (
      <ButtonLink
        {...defaultProps}
        href="#"
      />
    )
  })
