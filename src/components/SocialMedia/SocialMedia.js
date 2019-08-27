import React from 'react'
import _map from 'lodash/map'

import {
  SocialMediaListStyled,
  SocialMediaItemStyled,
  SocialMediaLinkStyled,
  SocialMediaIconStyled
} from './styledComponents'

const SocialMedia = (props) => {
  const {
    itemsArray
  } = props
  return (
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
}

export default SocialMedia
