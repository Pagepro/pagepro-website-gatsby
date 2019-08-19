import styled from 'styled-components'

const ColorsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const ColorsListItemStyled = styled.li`
  margin: calc(${props => props.theme.size.gutter} * 1.5);
  text-align: center;
`

const ColorBgStyled = styled.div`
  margin-bottom: ${props => props.theme.size.gutter};
  width: ${props => props.theme.size.colorBg};
  height: ${props => props.theme.size.colorBg};
`

const ColorLabelStyled = styled.div`
  margin-bottom: calc(${props => props.theme.size.gutter} / 2);
  font-size: 12px;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

export {
  ColorsListStyled,
  ColorsListItemStyled,
  ColorBgStyled,
  ColorLabelStyled,
}
