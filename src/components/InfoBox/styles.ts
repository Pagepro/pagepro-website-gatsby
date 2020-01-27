import styled, { css } from 'styled-components';

interface IInfoBoxStyledProps {
  centered?: boolean;
}

const InfoBoxStyled = styled.div<IInfoBoxStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({ centered }) =>
    centered &&
    css`
      align-items: center;
      text-align: center;
    `}
`;

const InfoBoxIconWrapperStyled = styled.figure`
  display: inline-block;
  line-height: 1em;
  font-size: 3.625rem;
  margin-bottom: 2rem;
`;

const InfoBoxIconStyled = styled.img`
  height: 1em;
`;

const InfoBoxHeadingStyled = styled.div`
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const InfoBoxTitleStyled = styled.div`
  margin-bottom: 0.75rem;
`;

const InfoBoxDescStyled = styled.div`
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 1.5rem;
`;

const InfoBoxActionStyled = styled.div``;

export {
  InfoBoxStyled,
  InfoBoxIconWrapperStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled,
};
