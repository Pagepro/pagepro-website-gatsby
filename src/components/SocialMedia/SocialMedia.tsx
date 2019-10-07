import * as React from 'react'
import {
  SocialMediaListStyled,
  SocialMediaItemStyled,
  SocialMediaLinkStyled,
  SocialMediaIconStyled,
} from './styledComponents'

interface ISocialMediaItem {
  href: string
  icon: React.ReactNode
}

interface IProps {
  items: ISocialMediaItem[]
}

const SocialMedia: React.FC<IProps> = ({ items }) => (
  <SocialMediaListStyled>
    {items.map(({ href, icon }) => (
      <SocialMediaItemStyled key={href}>
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

export default SocialMedia
