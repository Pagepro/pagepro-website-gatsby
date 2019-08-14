import styled from 'styled-components'

const ColorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const ColorsListItem = styled.li`
  margin: 22px;
  text-align: center;
`

const ColorBg = styled.div`
  width: ${props => props.theme.size.colorBg};
  height: ${props => props.theme.size.colorBg};
`

const ColorLabel = styled.div`
  margin-top: 10px;
`

export {
  ColorsList,
  ColorsListItem,
  ColorBg,
  ColorLabel,
}
