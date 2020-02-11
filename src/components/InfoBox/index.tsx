import React from 'react';

import {
  InfoBoxStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled,
} from './styles';
import Link from '../Link';
import { Typo6, Typo7 } from '../Typography';

export interface IInfoBox {
  heading: string;
  title?: string;
  centered?: boolean;
  children: React.ReactNode;
  shouldDisplayAction?: boolean;
  icon?: React.ReactNode;
}

type IProps = IInfoBox;

const InfoBox: React.FC<IProps> = ({ heading, title, children, shouldDisplayAction = true, icon, ...otherProps }) => (
  <InfoBoxStyled {...otherProps}>
    <InfoBoxIconStyled>{icon}</InfoBoxIconStyled>
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
    {shouldDisplayAction && (
      <InfoBoxActionStyled>
        <Link withArrow iconColor="red" href="#">
          More
        </Link>
      </InfoBoxActionStyled>
    )}
  </InfoBoxStyled>
);

InfoBox.defaultProps = {
  centered: false,
  title: '',
};

export default InfoBox;
