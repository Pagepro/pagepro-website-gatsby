import React from 'react';
import { IInfoBox } from '../components/InfoBox';
import { Typo7 } from '../components/Typography';

const ReactIcon = require('../assets/images/svg/react.svg') as string;
const ReactNativeIcon = require('../assets/images/svg/react-native.svg') as string;
const FrontEndIcon = require('../assets/images/svg/front-end.svg') as string;
const GatsbyIcon = require('../assets/images/svg/gatsby.svg') as string;
const StorybookIcon = require('../assets/images/svg/storybook.svg') as string;
const NodeJsIcon = require('../assets/images/svg/nodejs.svg') as string;

export const specialities: IInfoBox[] = [
  {
    heading: 'React Development',
    src: ReactIcon,
    alt: 'React Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'React Native Development',
    src: ReactNativeIcon,
    alt: 'React Native Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'Front-end Development',
    src: FrontEndIcon,
    alt: 'Front-end Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'Gatsby Development',
    src: GatsbyIcon,
    alt: 'Gatsby Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'StoryBook Development',
    src: StorybookIcon,
    alt: 'StoryBook Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
  {
    heading: 'NodeJS Development',
    src: NodeJsIcon,
    alt: 'NodeJS Development',
    children: <Typo7>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Typo7>,
  },
];
