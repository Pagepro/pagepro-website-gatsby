import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const variables = {
  iconFontSize: '3.625rem',
};

interface IInfoBoxStyledProps {
  centered?: boolean;
}

const InfoBoxStyled = styled.div<IInfoBoxStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ centered }: IInfoBoxStyledProps) =>
    centered &&
    css`
      align-items: center;
      text-align: center;
    `}
`;

const InfoBoxIconWrapperStyled = styled.figure`
  display: inline-block;
  line-height: 1em;
  font-size: ${variables.iconFontSize};
  margin-bottom: 2rem;
`;

const InfoBoxIconStyled = styled.img`
  height: 1em;
`;

const InfoBoxHeadingStyled = styled.div`
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.darkGrey};
`;

const InfoBoxTitleStyled = styled.div`
  margin-bottom: 0.75rem;
`;

const InfoBoxDescStyled = styled.div`
  flex-grow: 1;
  color: ${props => rgba(props.theme.colors.mediumGrey, 0.6)};
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
