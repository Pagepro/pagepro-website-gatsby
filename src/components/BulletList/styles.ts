import styled from 'styled-components';

const BulletListStyled = styled.ul`
  padding-left: calc(${props => props.theme.gutter.gutter16} * 0.75);
`;

const BulletListItemStyled = styled.li`
  position: relative;

  &::before {
    position: absolute;
    top: 0.5rem;
    left: calc(-${props => props.theme.gutter.gutter16} * 0.75);
    display: flex;
    flex-shrink: 0;
    content: '';
    width: 3px;
    height: 3px;
    background: ${props => props.theme.color.red};
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.gutter.gutter16};
  }
`;

const BulletListLabelStyled = styled.p``;

export { BulletListStyled, BulletListItemStyled, BulletListLabelStyled };
