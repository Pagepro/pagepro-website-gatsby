import React from 'react'
import PropTypes from 'prop-types'
import {
  InfoBoxStyled,
  InfoBoxIconWrapperStyled,
  InfoBoxIconStyled,
  InfoBoxHeadingStyled,
  InfoBoxTitleStyled,
  InfoBoxDescStyled,
  InfoBoxActionStyled,
} from './styledComponents'
import theme from '../../themes/theme'
import Link from '../Link/Link'
import { Typo5, Typo6 } from '../Typography'

const InfoBox = ({
  heading,
  title,
  children,
  ...otherProps
}) => (
  <InfoBoxStyled {...otherProps}>
    <InfoBoxIconWrapperStyled>
      <InfoBoxIconStyled {...otherProps} />
    </InfoBoxIconWrapperStyled>
    <InfoBoxHeadingStyled>
      <Typo5
        as="h3"
        fontWeight={theme.fontWeight.bold}
      >
        {heading}
      </Typo5>
    </InfoBoxHeadingStyled>
    <InfoBoxDescStyled>
      {title
        ? (
          <InfoBoxTitleStyled>
            <Typo6
              fontWeight={theme.fontWeight.bold}
              color={theme.color.mediumGrey}
            >
              {title}
            </Typo6>
          </InfoBoxTitleStyled>
        ) : null }
      {children}
    </InfoBoxDescStyled>
    <InfoBoxActionStyled>
      <Link
        withArrow
        iconColor={theme.color.red}
        href="#"
        label="More"
      />
    </InfoBoxActionStyled>
  </InfoBoxStyled>
)

InfoBox.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  centered: PropTypes.bool,
}

InfoBox.defaultProps = {
  centered: false,
  title: '',
}

export default InfoBox
