import React from 'react';
import { IInfoBox } from '../components/InfoBox';
import { Typo7 } from '../components/Typography';
const ReactIcon = require('../assets/images/svg/react.svg') as string;

export const specialities: IInfoBox[] = [
  {
    heading: 'React Development',
    src: ReactIcon,
    alt: 'React Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'React Native Development',
    src: ReactIcon,
    alt: 'React Native Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'Front-end Development',
    src: ReactIcon,
    alt: 'Front-end Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'Gatsby Development',
    src: ReactIcon,
    alt: 'Gatsby Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'StoryBook Development',
    src: ReactIcon,
    alt: 'StoryBook Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
];
