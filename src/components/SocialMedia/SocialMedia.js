import React from 'react'
import _map from 'lodash/map'

import PropTypes from 'prop-types'
import {
  SocialMediaListStyled,
  SocialMediaItemStyled,
  SocialMediaLinkStyled,
  SocialMediaIconStyled
} from './styledComponents'

const SocialMedia = ({
  itemsArray
}) => (
  <SocialMediaListStyled>
    {_map(itemsArray, (value, key) => (
      <SocialMediaItemStyled key={key}>
        <SocialMediaLinkStyled
          href={value.href}
          target="_blank"
        >
          <SocialMediaIconStyled>
            {value.icon}
          </SocialMediaIconStyled>
        </SocialMediaLinkStyled>
      </SocialMediaItemStyled>
    ))}
  </SocialMediaListStyled>
)

SocialMedia.propTypes = {
  itemsArray: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    icon: PropTypes.node,
  }))
}

export default SocialMedia
