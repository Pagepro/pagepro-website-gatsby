import styled from 'styled-components'

const TechnologiesStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill,
  minmax(${props => props.theme.technologies.width}, 1fr));
  grid-gap: calc(${props => props.theme.size.gutter} * 2.5)
  calc(${props => props.theme.size.gutter} * 3.5);
  align-items: center;
  justify-items: center;
`

const TechnologiesItemStyled = styled.li`
`

export {
  TechnologiesStyled,
  TechnologiesItemStyled,
}
