import styled from 'styled-components'

const variables = {
  bgDecorWidth: '140px',
  bgDecorHeight: '114px',
  countFontSize: '68px',
}

const StatNumberStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${props => props.theme.gutter.gutter24};
  padding-bottom: ${props => props.theme.gutter.gutter8};

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 10px;
    display: block;
    height: 100%;
    width: ${variables.bgDecorWidth};
    min-height: ${variables.bgDecorHeight};
    content: '';
    background: ${props => props.theme.color.lightGrey};
  }
`

const StatNumberDescriptionStyled = styled.div`
  line-height: ${props => props.theme.lineHeight.normal};
`

const StatNumberCountStyled = styled.div`
  font-size: ${variables.countFontSize};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: ${props => props.theme.lineHeight.normal};
  color: ${props => props.theme.color.red};
`

export {
  StatNumberStyled,
  StatNumberDescriptionStyled,
  StatNumberCountStyled,
}
