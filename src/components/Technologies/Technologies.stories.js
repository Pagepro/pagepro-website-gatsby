import React from 'react'
import { storiesOf } from '@storybook/react'

import Technologies from './Technologies'
import Angular from '../../assets/images/svg/angular.svg'
import WordPress from '../../assets/images/svg/word-press.svg'
import Html5 from '../../assets/images/svg/html5.svg'
import ReactIcon from '../../assets/images/svg/react-2.svg'
import Redux from '../../assets/images/svg/redux.svg'
import ReactNative from '../../assets/images/svg/react-native-2.svg'
import Gulp from '../../assets/images/svg/gulp.svg'
import Css3 from '../../assets/images/svg/css3.svg'

storiesOf('Technologies', module)
  .add('default', () => (
    <Technologies itemsArray = {
      [
        {
          src: Angular,
          alt: 'Picture'
        },
        {
          src: WordPress,
          alt: 'Picture'
        },
        {
          src: Html5,
          alt: 'Picture'
        },
        {
          src: ReactIcon,
          alt: 'Picture'
        },
        {
          src: Redux,
          alt: 'Picture'
        },
        {
          src: ReactNative,
          alt: 'Picture'
        },
        {
          src: Gulp,
          alt: 'Picture'
        },
        {
          src: Css3,
          alt: 'Picture'
        },
        {
          src: Angular,
          alt: 'Picture'
        },
        {
          src: WordPress,
          alt: 'Picture'
        },
        {
          src: Html5,
          alt: 'Picture'
        },
        {
          src: ReactIcon,
          alt: 'Picture'
        },
        {
          src: Redux,
          alt: 'Picture'
        },
        {
          src: ReactNative,
          alt: 'Picture'
        }
      ]
    }/>
  ))
