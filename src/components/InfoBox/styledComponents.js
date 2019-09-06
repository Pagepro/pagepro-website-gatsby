import styled, { css } from 'styled-components'
import { rgba } from 'polished'

const InfoBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ centered }) => centered && css`
    align-items: center;
    text-align: center;
  `}

  ${({ withBg }) => withBg && css`
    background: ${props => props.theme.color.white};
    padding: calc(${props => props.theme.size.gutter} * 3.5)
    calc(${props => props.theme.size.gutter} * 1.25)
    calc(${props => props.theme.size.gutter} * 1.25);
  `}
`

const InfoBoxIconWrapperStyled = styled.figure`
  display: inline-block;
  line-height: 1em;
  font-size: ${props => props.theme.infoBox.iconFontSize};
  margin-bottom: calc(${props => props.theme.size.gutter} * 2);
`

const InfoBoxIconStyled = styled.img`
  height: 1em;
`

const InfoBoxHeadingStyled = styled.div`
  margin-bottom: calc(${props => props.theme.size.gutter} * 1.5);
`

const InfoBoxTitleStyled = styled.div`
  margin-bottom: calc(${props => props.theme.size.gutter} * .75);
`

const InfoBoxDescStyled = styled.div`
  flex-grow: 1;
  color: ${props => rgba(props.theme.color.mediumGrey,
    props.theme.opacities.opacity60)};
  margin-bottom: calc(${props => props.theme.size.gutter} * 1.5);
`

const InfoBoxActionStyled = styled.div`
`

export {
  InfoBoxStyled,
  InfoBoxIconWrapperStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled
}
