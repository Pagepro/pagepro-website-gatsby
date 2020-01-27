import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from './';
import Container from '../Container';
import Flex from '../Flex';
import InfoBox from '../InfoBox';
import Slider from '../Slider';
import { Typo3, Typo7 } from '../Typography';
import { specialities } from '../../mocks/specialitiesMock';
const ReactIcon = require('../../assets/images/svg/react.svg') as string;

storiesOf('Section', module)
  .add('we are', () => (
    <Section
      heading={
        <Typo3 as="h2" color="darkGrey" fontWeight="semiBold" lineHeight="medium">
          We are a community of high-class developers
          <br /> specialized in building user interfaces.
        </Typo3>
      }
      desc={
        <Typo7 color="grey">
          Pagepro was created because we want to build successful & innovative products with A-players: best <br />
          in class clients (startups, business owners), best in class developers, best in class technologies and <br />
          provide best in class cross platform software that is loved by its users
        </Typo7>
      }
    >
      <Flex>
        <Flex flex="1">
          <Container pr="5rem">
            <InfoBox heading="Web &amp; Mobile Development" src={ReactIcon} alt="React">
              <Typo7>
                Gain access to our senior leaders and benefit from their insights into the technology and business
                domains.
              </Typo7>
            </InfoBox>
          </Container>
        </Flex>
        <Flex flex="1">
          <Container pr="5rem">
            <InfoBox heading="Consulting" src={ReactIcon} alt="React">
              <Typo7>
                Gain access to our senior leaders and benefit from their insights into the technology and business
                domains.
              </Typo7>
            </InfoBox>
          </Container>
        </Flex>
        <Flex flex="1">
          <Container pr="5rem">
            <InfoBox heading=" Trainings" src={ReactIcon} alt="React">
              <Typo7>Explain your problem, we might already resolve it in one of our past projects</Typo7>
            </InfoBox>
          </Container>
        </Flex>
      </Flex>
    </Section>
  ))
  .add('specialities', () => (
    <Section
      overflow="hidden"
      hasCustomInner
      bg="lightGrey"
      heading={
        <Typo3 as="h2" color="darkGrey" fontWeight="semiBold" lineHeight="medium">
          Specialities
        </Typo3>
      }
      desc={
        <Typo7 color="darkNavy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </Typo7>
      }
    >
      <Slider specialities={specialities} />
    </Section>
  ));
