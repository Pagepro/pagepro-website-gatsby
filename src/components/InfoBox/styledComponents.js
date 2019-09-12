import styled, { css } from 'styled-components'
import { rgba } from 'polished'

const variables = {
  iconFontSize: '58px',
}

const InfoBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ centered }) => centered && css`
    align-items: center;
    text-align: center;
  `}
`

const InfoBoxIconWrapperStyled = styled.figure`
  display: inline-block;
  line-height: 1em;
  font-size: ${variables.iconFontSize};
  margin-bottom: calc(${props => props.theme.gutter.gutter32});
`

const InfoBoxIconStyled = styled.img`
  height: 1em;
`

const InfoBoxHeadingStyled = styled.div`
  margin-bottom: calc(${props => props.theme.gutter.gutter24});
  color: ${props => props.theme.color.darkGrey};
`

const InfoBoxTitleStyled = styled.div`
  margin-bottom: calc(${props => props.theme.gutter.gutter16} * .75);
`

const InfoBoxDescStyled = styled.div`
  flex-grow: 1;
  color: ${props => rgba(
    props.theme.color.mediumGrey,
    props.theme.opacities.opacity60
  )};
  margin-bottom: ${props => props.theme.gutter.gutter24};
`

const InfoBoxActionStyled = styled.div``

export {
  InfoBoxStyled,
  InfoBoxIconWrapperStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled
}
