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

const InfoBoxIconStyled = styled.div`
  display: inline-flex;
  margin-bottom: 2rem;

  svg {
    font-size: 3.625rem;
  }
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
`;

const InfoBoxActionStyled = styled.div`
  margin-top: 1.5rem;
`;

export {
  InfoBoxStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled,
};
