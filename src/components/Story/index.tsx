import React from 'react';

import { IColor } from 'themes/variables';
import {
  StoryStyled,
  StoryHeadingStyled,
  StoryWrapperMediaStyled,
  StoryMediaStyled,
  StoryTechnologiesStyled,
} from './styles';
import { Typo6, Typo8 } from '../Typography';
import Link from '../Link';

interface IProps {
  bg?: IColor;
  src: string;
  projectName: string;
  technologies: string;
  reversed?: boolean;
}

const Story = ({ bg, src, projectName, technologies, reversed }: IProps) => (
  <StoryStyled bg={bg} p="1.5rem 1.5rem 2.5rem 1.5rem" reversed={reversed}>
    <StoryHeadingStyled>
      <Typo6 fontWeight="semiBold">{projectName}</Typo6>
    </StoryHeadingStyled>
    <StoryWrapperMediaStyled>
      <StoryMediaStyled src={src} alt={projectName} />
    </StoryWrapperMediaStyled>
    <StoryTechnologiesStyled>
      <Typo8>Technology: {technologies}</Typo8>
    </StoryTechnologiesStyled>
    <Link light withArrow iconColor="white" href="#">
      more
    </Link>
  </StoryStyled>
);

export default Story;
