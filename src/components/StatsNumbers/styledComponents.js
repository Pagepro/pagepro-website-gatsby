import styled from 'styled-components'

const StatsNumbersStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${props => props.theme.gutter.gutter24};
  padding-bottom: ${props => props.theme.gutter.gutter8};
  text-align: left;

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 10px;
    display: block;
    height: 100%;
    width: ${props => props.theme.statsNumber.bgDecorWidth};
    min-height: ${props => props.theme.statsNumber.bgDecorHeight};
    content: '';
    background: ${props => props.theme.color.lightGrey};
  }
`

const StatsNumbersDescriptionStyled = styled.div`
  line-height: ${props => props.theme.lineHeight.normal};
`

const StatsNumbersCountStyled = styled.div`
  font-size: ${props => props.theme.statsNumber.countFontSize};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: ${props => props.theme.lineHeight.normal};
  color: ${props => props.theme.color.red};
`

export {
  StatsNumbersStyled,
  StatsNumbersDescriptionStyled,
  StatsNumbersCountStyled,
}
