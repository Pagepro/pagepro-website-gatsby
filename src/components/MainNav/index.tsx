import * as React from 'react'

import {
  MainNavStyled,
  MainNavItemStyled,
  MainNavLinkStyled,
} from './styles'
import { Typo7 } from '../Typography'

const items = [
  {
    label: 'Projects',
    href: '#',
  },
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Career',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'Contact us',
    href: '#',
  },
]

const MainNav: React.FC = () => (
  <MainNavStyled>
    {items.map(({ label, href }) => (
      <MainNavItemStyled key={`${href}${label}`}>
        <MainNavLinkStyled href={href}>
          <Typo7>{label}</Typo7>
        </MainNavLinkStyled>
      </MainNavItemStyled>
    ))}
  </MainNavStyled>
)

export default MainNav
