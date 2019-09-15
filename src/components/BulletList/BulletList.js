import React from 'react'
import PropTypes from 'prop-types'
import {
  BulletListStyled,
  BulletListItemStyled,
} from './styledComponents'
import { Typo6 } from '../Typography/Typography'

const BulletList = props => {
  const {
    itemsArray,
  } = props
  return (
    <BulletListStyled>
      {itemsArray.map(({ text }, key) => (
        <BulletListItemStyled key={key}>
          <Typo6>{text}</Typo6>
        </BulletListItemStyled>
      ))}
    </BulletListStyled>
  )
}

BulletList.propTypes = {
  itemsArray: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default BulletList
