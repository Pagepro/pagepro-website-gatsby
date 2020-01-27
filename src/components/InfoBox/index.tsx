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
import Link from '../Link';
import { Typo6, Typo7 } from '../Typography';

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
      <Typo6 as="h3" fontWeight="bold">
        {heading}
      </Typo6>
    </InfoBoxHeadingStyled>
    <InfoBoxDescStyled>
      {title ? (
        <InfoBoxTitleStyled>
          <Typo7 fontWeight="bold" color="mediumGrey">
            {title}
          </Typo7>
        </InfoBoxTitleStyled>
      ) : null}
      {children}
    </InfoBoxDescStyled>
    <InfoBoxActionStyled>
      <Link withArrow iconColor="red" href="#">
        <Typo7>More</Typo7>
      </Link>
    </InfoBoxActionStyled>
  </InfoBoxStyled>
);

InfoBox.defaultProps = {
  centered: false,
  title: '',
};

export default InfoBox;
