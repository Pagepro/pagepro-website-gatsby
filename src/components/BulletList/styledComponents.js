import styled from 'styled-components'

const BulletListStyled = styled.ul`
  padding-left: calc(${props => props.theme.size.gutter} * .75);
`

const BulletListItemStyled = styled.li`
  position: relative;

  &::before {
    position: absolute;
    top: .5rem;
    left: calc(-${props => props.theme.size.gutter} * .75);
    display: flex;
    flex-shrink: 0;
    content: '';
    width: 3px;
    height: 3px;
    background: ${props => props.theme.color.red};
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.size.gutter};
  }
`

const BulletListLabelStyled = styled.p`
`

export {
  BulletListStyled,
  BulletListItemStyled,
  BulletListLabelStyled,
}
