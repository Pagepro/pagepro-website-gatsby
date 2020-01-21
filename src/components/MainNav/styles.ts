import styled from 'styled-components';

import { decorLink } from '../../common/mixins';

const MainNavStyled = styled.ul`
  display: flex;
`;

const MainNavItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: ${props => props.theme.gutter.gutter32};
  }
`;

const MainNavLinkStyled = styled.a`
  ${({ theme }) =>
    decorLink({
      height: '2px',
      hoverUnderlineBg: theme.color.red,
      theme,
    })}
  display: block;
  color: ${props => props.theme.color.lightGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`;

export { MainNavStyled, MainNavItemStyled, MainNavLinkStyled };
