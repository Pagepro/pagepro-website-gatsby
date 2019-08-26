import React from 'react'
import _map from 'lodash/map'

import {
  BulletListStyled,
  BulletListItemStyled
} from './styledComponents'
import { Typo8 } from '../Typography/Typography'

const BulletList = (props) => {
  const {
    itemsArray
  } = props
  return (
    <BulletListStyled>
      {_map(itemsArray, (value, key) => (
        <BulletListItemStyled key={key}>
          <Typo8>{value.text}</Typo8>
        </BulletListItemStyled>
      ))}
    </BulletListStyled>
  )
}

export default BulletList
