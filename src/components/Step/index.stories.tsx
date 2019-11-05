import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import Step from '.'

storiesOf('Step', module)
  .add('default', () => {
    const defaultProps = {
      title: text('Title', 'Step 1'),
      subtitle: text('Subtitle', 'Materials gathering'),
      desc: text('Description', 'At the beginning of our project, we received'
        + 'specification with design in Sketch. Our first move was to prepare'
        + 'a Style Guide for reusable components starting from Form Styles and'
        + 'plan for Grid system.'),
    }

    return (
      <Step
        {...defaultProps}
      />
    )
  })
