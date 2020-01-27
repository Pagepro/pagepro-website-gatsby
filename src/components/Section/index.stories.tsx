import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from './';
import Container from '../Container';
import Flex from '../Flex';
import InfoBox from '../InfoBox';
import { Typo3, Typo7 } from '../Typography';

const ReactIcon = require('../../assets/images/svg/react.svg') as string;

storiesOf('Section', module).add('we are', () => {
  return (
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
  );
});
