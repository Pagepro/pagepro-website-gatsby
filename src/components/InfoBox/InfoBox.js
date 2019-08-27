import React from 'react'

import PropTypes from 'prop-types'
import {
  InfoBoxStyled,
  InfoBoxIconWrapperStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled
} from './styledComponents'
import theme from '../../themes/theme'
import Link from '../Link/Link'
import { Heading11, Typo8 } from '../Typography/Typography'

const InfoBox = ({
  heading,
  title,
  children,
  ...otherProps
}) => (
  <InfoBoxStyled {...otherProps}>
    <InfoBoxIconWrapperStyled>
      <InfoBoxIconStyled {...otherProps}>
      </InfoBoxIconStyled>
    </InfoBoxIconWrapperStyled>
    <InfoBoxHeadingStyled>
      <Heading11
        tag='h3'
        fontWeight={theme.fontWeight.bold}
      >
        {heading}
      </Heading11>
    </InfoBoxHeadingStyled>
    <InfoBoxDescStyled>
    {title ?
      <InfoBoxTitleStyled>
        <Typo8
          fontWeight={theme.fontWeight.bold}
          color={theme.color.darkGrey2}
          >
          {title}
        </Typo8>
      </InfoBoxTitleStyled>
    : null }
      {children}
    </InfoBoxDescStyled>
    <InfoBoxActionStyled>
      <Link
          withArrow
          href="#"
          label="More"
      />
    </InfoBoxActionStyled>
  </InfoBoxStyled>
)

InfoBox.propTypes = {
  heading: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  withBg: PropTypes.bool,
  centered: PropTypes.bool,
}

export default InfoBox
