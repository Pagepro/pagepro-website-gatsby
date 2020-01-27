import React from 'react';
import { OverflowProps } from 'styled-system';

import Container from '../Container';
import Inner from '../Inner';
import { IColor } from 'themes/variables';
import { SectionInnerStyled } from './styles';

interface IProps extends OverflowProps {
  bg?: IColor;
  heading?: React.ReactNode;
  desc?: React.ReactNode;
  children?: React.ReactNode;
  hasCustomInner?: boolean;
}

const Section = ({ bg, overflow, heading, desc, children, hasCustomInner }: IProps) => (
  <Container overflow={overflow} pt="3.75rem" pb="3.75rem" bg={bg}>
    {hasCustomInner ? (
      <>
        <Inner>
          <Container mb="1.5rem">{heading}</Container>
          {desc && <Container mb="2.5rem">{desc}</Container>}
        </Inner>
        <SectionInnerStyled>{children}</SectionInnerStyled>
      </>
    ) : (
      <Inner>
        <Container mb="1.5rem">{heading}</Container>
        {desc && <Container mb="2.5rem">{desc}</Container>}
        {children}
      </Inner>
    )}
  </Container>
);

export default Section;
