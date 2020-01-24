import React from 'react';

import { LinkLabelStyled, LinkIconStyled, LinkStyled } from './styles';
import GitHub from '../../assets/svg/GitHub';
import ArrowRight from '../../assets/svg/ArrowRight';
import { IColor } from '../../themes/variables';

interface IProps {
  href: string;
  withGithub?: boolean;
  withArrow?: boolean;
  iconColor?: IColor;
  light?: boolean;
}

const Link: React.FC<IProps> = ({ withGithub, children, withArrow, iconColor, ...rest }) => (
  <LinkStyled {...rest}>
    {withGithub && (
      <LinkIconStyled>
        <GitHub fontSize="1rem" />
      </LinkIconStyled>
    )}
    <LinkLabelStyled>{children}</LinkLabelStyled>
    {withArrow && (
      <LinkIconStyled>
        <ArrowRight fontSize="0.5rem" fill={iconColor} />
      </LinkIconStyled>
    )}
  </LinkStyled>
);

Link.defaultProps = {
  iconColor: 'black',
  light: false,
  withArrow: false,
  withGithub: false,
};

export default Link;
