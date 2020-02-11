import React from 'react';
import { OverflowProps } from 'styled-system';

import Container from '../Container';
import Inner from '../Inner';
import { IColor } from 'themes/variables';
import { SectionInnerStyled, SectionHeadingStyled, SectionDescStyled, SectionContentStyled } from './styles';

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
          <SectionHeadingStyled>{heading}</SectionHeadingStyled>
          {desc && <SectionDescStyled>{desc}</SectionDescStyled>}
        </Inner>
        <SectionInnerStyled>{children}</SectionInnerStyled>
      </>
    ) : (
      <Inner>
        <SectionHeadingStyled>{heading}</SectionHeadingStyled>
        {desc && <SectionDescStyled>{desc}</SectionDescStyled>}
        <SectionContentStyled>{children}</SectionContentStyled>
      </Inner>
    )}
  </Container>
);

export default Section;
