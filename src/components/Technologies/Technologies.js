import React from 'react'
import _map from 'lodash/map'

import {
  TechnologiesStyled,
  TechnologiesItemStyled
} from './styledComponents'


const Technologies = (props) => {
  const {
    itemsArray
  } = props
  return (
    <TechnologiesStyled>
      {_map(itemsArray, (value, key) => (
        <TechnologiesItemStyled key={key}>
          <img src={value.src} alt={value.alt} />
        </TechnologiesItemStyled>
      ))}
    </TechnologiesStyled>
  )
}

export default Technologies