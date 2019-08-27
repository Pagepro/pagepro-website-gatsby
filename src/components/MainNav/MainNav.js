import React from 'react'
import _map from 'lodash/map'

import {
  MainNavStyled,
  MainNavItemStyled,
  MainNavLinkStyled
} from './styledComponents'
import { Typo9 } from '../Typography/Typography'

const MainNav = () => {
  const items = [
    {
      label: 'Projects',
      href: '#'
    },
    {
      label: 'Services',
      href: '#'
    },
    {
      label: 'About',
      href: '#'
    },
    {
      label: 'Career',
      href: '#'
    },
    {
      label: 'Blog',
      href: '#'
    },
    {
      label: 'Contact us',
      href: '#'
    }
  ]
  return (
    <MainNavStyled>
      {_map(items, (value, key) => (
        <MainNavItemStyled key={key}>
          <MainNavLinkStyled href={value.href}>
            <Typo9>{value.label}</Typo9>
          </MainNavLinkStyled>
        </MainNavItemStyled>
      ))}
    </MainNavStyled>
  )
}

export default MainNav
