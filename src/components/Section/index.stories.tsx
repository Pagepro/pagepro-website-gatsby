import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from './';
import Container from '../Container';
import Flex from '../Flex';
import BulletList from '../BulletList';
import InfoBox from '../InfoBox';
import Story from '../Story';
import Slider from '../Slider';
import Link from '../Link';
import { Typo3, Typo7 } from '../Typography';
import { specialities } from '../../mocks/specialitiesMock';

const ReactIcon = require('../../assets/images/svg/react.svg') as string;
const GatedTalent = require('../../assets/images/gated-talent.jpg') as string;

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
          Pagepro was created because we want to build successful &amp; innovative products with A-players: best <br />
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
      alt
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
  ))
  .add('why us', () => (
    <Section
      heading={
        <Typo3 as="h2" color="darkGrey" fontWeight="semiBold" lineHeight="medium">
          Why us?
        </Typo3>
      }
    >
      <Flex>
        <Flex flex="1">
          <Container pr="5rem">
            <InfoBox shouldDisplayAction={false} heading="Experienced Consultants" src={ReactIcon} alt="React">
              <BulletList
                items={[
                  'we are experienced in building advanced corporate systems and challenging, innovative products',
                  'we are well-versed in various project management and collaboration tools ',
                  'the average experience of our developers is 5 years',
                ]}
              />
            </InfoBox>
          </Container>
        </Flex>
        <Flex flex="1">
          <Container pr="5rem">
            <InfoBox shouldDisplayAction={false} heading="Front-end Specialisation " src={ReactIcon} alt="React">
              <BulletList
                items={[
                  'we organize internal training courses and workshops',
                  'we take part in meetings of the frontend community as participants and speakers',
                  'we build and share reusable frontend components, libraries, rules and style guides',
                ]}
              />
            </InfoBox>
          </Container>
        </Flex>
        <Flex flex="1">
          <Container pr="5rem">
            <InfoBox
              shouldDisplayAction={false}
              heading="Complex Projects"
              title=" In our portfolio you can find:"
              src={ReactIcon}
              alt="React"
            >
              <BulletList
                items={[
                  'financial platforms',
                  'real-time medical application',
                  'highly secure banking systems',
                  'big data analytics platforms ',
                  'enterprise critical systems',
                  'M2M applications',
                ]}
              />
            </InfoBox>
          </Container>
        </Flex>
      </Flex>
    </Section>
  ))
  .add('success stories', () => (
    <Section
      bg="darkNavy"
      heading={
        <Flex alignItems="center" justifyContent="space-between">
          <Typo3 as="h2" color="white" fontWeight="semiBold" lineHeight="medium">
            Success Stories
          </Typo3>
          <Link light withArrow iconColor="red" href="#">
            more
          </Link>
        </Flex>
      }
    >
      <Flex>
        <Container mt="2.5rem" mr="1.25rem" width="18.75rem">
          <Story bg="blue" reversed projectName="Gated Talent" src={GatedTalent} technologies="React, Sass" />
        </Container>
        <Container mr="1.25rem" width="18.75rem">
          <Story bg="red" projectName="Gated Talent" src={GatedTalent} technologies="React, Sass" />
        </Container>
        <Container mt="2.5rem" width="18.75rem">
          <Story bg="blue" reversed projectName="Gated Talent" src={GatedTalent} technologies="React, Sass" />
        </Container>
      </Flex>
    </Section>
  ));
