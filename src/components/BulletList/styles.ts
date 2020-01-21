import styled from 'styled-components';

const BulletListStyled = styled.ul`
  padding-left: calc(1rem * 0.75);
`;

const BulletListItemStyled = styled.li`
  position: relative;

  &::before {
    position: absolute;
    top: 0.5rem;
    left: calc(-1rem * 0.75);
    display: flex;
    flex-shrink: 0;
    content: '';
    width: 0.1875rem;
    height: 0.1875rem;
    background: ${props => props.theme.colors.red};
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const BulletListLabelStyled = styled.p``;

export { BulletListStyled, BulletListItemStyled, BulletListLabelStyled };
