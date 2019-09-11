import styled from 'styled-components'

const StatsNumbersStyled = styled.div`
  padding-top: calc(${props => props.theme.gutter.gutter16} * 1.5);
  padding-bottom: calc(${props => props.theme.gutter.gutter16} / 2);
  width: 100%;
  text-align: left;
  position: relative;

  &::before {
    z-index: -1;
    content: '';
    top: 0;
    left: 10px;
    display: block;
    position: absolute;
    height: 100%;
    width: ${props => props.theme.statsNumber.bgBoxWidth};
    min-height: ${props => props.theme.statsNumber.bgBoxHeight};
    background: ${props => props.theme.color.lightGrey};
  }
`

const StatsNumbersDescriptionStyled = styled.div`
  line-height: 1;
`

const StatsNumbersNumberStyled = styled.div`
  font-size: 68px;
  line-height: 1;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.color.red};
`

export {
  StatsNumbersStyled,
  StatsNumbersDescriptionStyled,
  StatsNumbersNumberStyled,
}
