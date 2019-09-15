import React from 'react'
import PropTypes from 'prop-types'
import {
  SocialMediaListStyled,
  SocialMediaItemStyled,
  SocialMediaLinkStyled,
  SocialMediaIconStyled,
} from './styledComponents'

const SocialMedia = ({ itemsArray }) => (
  <SocialMediaListStyled>
    {itemsArray.map(({ href, icon }, key) => (
      <SocialMediaItemStyled key={key}>
        <SocialMediaLinkStyled
          href={href}
          target="_blank"
        >
          <SocialMediaIconStyled>
            {icon}
          </SocialMediaIconStyled>
        </SocialMediaLinkStyled>
      </SocialMediaItemStyled>
    ))}
  </SocialMediaListStyled>
)

SocialMedia.propTypes = {
  itemsArray: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  })).isRequired,
}

export default SocialMedia
