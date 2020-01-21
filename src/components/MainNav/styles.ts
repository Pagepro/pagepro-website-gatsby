import styled from 'styled-components';

import { decorLink } from '../../common/mixins';

const MainNavStyled = styled.ul`
  display: flex;
`;

const MainNavItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const MainNavLinkStyled = styled.a`
  ${({ theme }) =>
    decorLink({
      theme,
      height: '0.125rem',
      hoverUnderlineBg: theme.colors.red,
    })}
  display: block;
  color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

export { MainNavStyled, MainNavItemStyled, MainNavLinkStyled };
