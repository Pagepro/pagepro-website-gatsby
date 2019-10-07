import styled from 'styled-components'

const variables = {
  width: '50px',
}

const TechnologiesStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill,
    minmax(${variables.width}, 1fr));
  grid-gap: calc(${props => props.theme.gutter.gutter16} * 2.5)
    calc(${props => props.theme.gutter.gutter16} * 3.5);
  align-items: center;
  justify-items: center;
`

const TechnologiesItemStyled = styled.li`
`

export {
  TechnologiesStyled,
  TechnologiesItemStyled,
}
