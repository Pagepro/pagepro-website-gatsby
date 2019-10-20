import * as React from 'react'

import {
  BulletListStyled,
  BulletListItemStyled,
} from './styles'
import { Typo6 } from '../Typography'

interface IProps {
  items: string[]
}

const BulletList: React.FC<IProps> = ({ items }) => (
  <BulletListStyled>
    {items.map(item => (
      <BulletListItemStyled key={item}>
        <Typo6>{item}</Typo6>
      </BulletListItemStyled>
    ))}
  </BulletListStyled>
)

export default BulletList
