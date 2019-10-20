import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Technologies from '.'

const Angular = require('../../assets/images/svg/angular.svg') as string
const WordPress = require('../../assets/images/svg/word-press.svg') as string
const Html5 = require('../../assets/images/svg/html5.svg') as string
const ReactIcon = require('../../assets/images/svg/react-2.svg') as string
const Redux = require('../../assets/images/svg/redux.svg') as string
const ReactNative = require('../../assets/images/svg/react-native-2.svg') as string
const Gulp = require('../../assets/images/svg/gulp.svg') as string
const Css3 = require('../../assets/images/svg/css3.svg') as string

storiesOf('Technologies', module)
  .add('default', () => (
    <Technologies items={
      [
        {
          src: Angular,
          alt: 'Picture',
        },
        {
          src: WordPress,
          alt: 'Picture',
        },
        {
          src: Html5,
          alt: 'Picture',
        },
        {
          src: ReactIcon,
          alt: 'Picture',
        },
        {
          src: Redux,
          alt: 'Picture',
        },
        {
          src: ReactNative,
          alt: 'Picture',
        },
        {
          src: Gulp,
          alt: 'Picture',
        },
        {
          src: Css3,
          alt: 'Picture',
        },
        {
          src: Angular,
          alt: 'Picture',
        },
        {
          src: WordPress,
          alt: 'Picture',
        },
        {
          src: Html5,
          alt: 'Picture',
        },
        {
          src: ReactIcon,
          alt: 'Picture',
        },
        {
          src: Redux,
          alt: 'Picture',
        },
        {
          src: ReactNative,
          alt: 'Picture',
        },
      ]
    }
    />
  ))
