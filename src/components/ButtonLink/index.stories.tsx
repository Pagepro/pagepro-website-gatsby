import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import ButtonLink from '.'
import { ButtonLinkType, ButtonLinkSize } from './styles'
import { getMappedEnum } from '../../common/utils'

storiesOf('ButtonLink', module)
  .add('default', () => {
    const defaultProps = {
      children: text('Button text', 'Hire Us'),
      type: select('Type', getMappedEnum(ButtonLinkType), ButtonLinkType.primary) as ButtonLinkType,
      size: select('Size', getMappedEnum(ButtonLinkSize), ButtonLinkSize.medium) as ButtonLinkSize,
      left: boolean('isLeft', false),
    }

    return (
      <ButtonLink
        {...defaultProps}
        href="#"
      />
    )
  })
