import styled, { css } from 'styled-components';

import Container from '../Container';

interface IStoryStyledProps {
  reversed?: boolean;
}

const StoryWrapperMediaStyled = styled.figure`
  display: flex;
  margin-left: -1.5rem;
  margin-bottom: 1.5rem;
`;

const StoryStyled = styled(Container)<IStoryStyledProps>`
  ${({ theme }) => theme.shadows.shadow1};
  color: ${({ theme }) => theme.colors.white};
  min-height: 25rem;

  ${({ reversed }) =>
    reversed &&
    css`
      ${StoryWrapperMediaStyled} {
        margin-right: -1.5rem;
        margin-left: 0;
        justify-content: flex-end;
      }
    `}
`;

const StoryHeadingStyled = styled.div`
  margin-bottom: 1.5rem;
`;

const StoryTechnologiesStyled = styled.div`
  margin-bottom: 0.5rem;
`;

const StoryMediaStyled = styled.img``;

export { StoryStyled, StoryHeadingStyled, StoryWrapperMediaStyled, StoryMediaStyled, StoryTechnologiesStyled };
