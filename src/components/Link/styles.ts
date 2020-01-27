import styled, { css } from 'styled-components';

import { decorLink } from '../../common/mixins';
import theme from '../../themes/theme';
import { Typo7 } from '../Typography';

const LinkLabelStyled = styled(Typo7)`
  ${decorLink}
`;

interface ILinkStyledProps {
  light?: boolean;
}

const LinkStyled = styled.a<ILinkStyledProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: ${theme.colors.darkNavy};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;

  ${props =>
    props.light &&
    css`
      color: ${theme.colors.white};
    `}

  &:hover {
    ${LinkLabelStyled}::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const LinkIconStyled = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  & + ${LinkLabelStyled} {
    margin-left: 0.3125rem;
  }

  ${LinkLabelStyled} + & {
    margin-left: 0.3125rem;
    margin-top: 0.125rem;
  }
`;

export { LinkLabelStyled, LinkIconStyled, LinkStyled };
