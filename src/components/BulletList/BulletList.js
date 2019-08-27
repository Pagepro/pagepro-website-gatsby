import React from 'react'
import _map from 'lodash/map'

import {
  BulletListStyled,
  BulletListItemStyled
} from './styledComponents'
import { Typo6 } from '../Typography/Typography'

const BulletList = (props) => {
  const {
    itemsArray
  } = props
  return (
    <BulletListStyled>
      {_map(itemsArray, (value, key) => (
        <BulletListItemStyled key={key}>
          <Typo6>{value.text}</Typo6>
        </BulletListItemStyled>
      ))}
    </BulletListStyled>
  )
}

export default BulletList
