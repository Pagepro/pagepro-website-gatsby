import React from 'react'
import _map from 'lodash/map'

import PropTypes from 'prop-types'
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

Technologies.propTypes = {
  itemsArray: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }))
}

export default Technologies