import React from 'react';

import Container from '../Container';
import Inner from '../Inner';

interface IProps {
  heading?: React.ReactNode;
  desc?: React.ReactNode;
  children?: React.ReactNode;
}

const Section = ({ heading, desc, children }: IProps) => (
  <Container pt="3.75rem" pb="3.75rem">
    <Inner>
      <Container mb="1.5rem">{heading}</Container>
      <Container mb="2.5rem">{desc}</Container>
      <Container>{children}</Container>
    </Inner>
  </Container>
);

export default Section;
