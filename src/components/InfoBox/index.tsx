import React from 'react';

import {
  InfoBoxStyled,
  InfoBoxIconWrapperStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled,
} from './styles';
import theme from '../../themes/theme';
import Link from '../Link';
import { Typo5, Typo6 } from '../Typography';

interface IProps {
  heading: string;
  src: string;
  alt: string;
  title?: string;
  centered?: boolean;
}

const InfoBox: React.FC<IProps> = ({ heading, title, children, ...otherProps }) => (
  <InfoBoxStyled {...otherProps}>
    <InfoBoxIconWrapperStyled>
      <InfoBoxIconStyled {...otherProps} />
    </InfoBoxIconWrapperStyled>
    <InfoBoxHeadingStyled>
      <Typo5 as="h3" fontWeight={theme.fontWeight.bold}>
        {heading}
      </Typo5>
    </InfoBoxHeadingStyled>
    <InfoBoxDescStyled>
      {title ? (
        <InfoBoxTitleStyled>
          <Typo6 fontWeight={theme.fontWeight.bold} color={theme.color.mediumGrey}>
            {title}
          </Typo6>
        </InfoBoxTitleStyled>
      ) : null}
      {children}
    </InfoBoxDescStyled>
    <InfoBoxActionStyled>
      <Link withArrow iconColor={theme.color.red} href="#">
        More
      </Link>
    </InfoBoxActionStyled>
  </InfoBoxStyled>
);

InfoBox.defaultProps = {
  centered: false,
  title: '',
};

export default InfoBox;
