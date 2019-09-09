import React from 'react'

import PropTypes from 'prop-types'
import {
  TechnologiesStyled,
  TechnologiesItemStyled
} from './styledComponents'

const Technologies = ({ itemsArray }) => (
  <TechnologiesStyled>
    {itemsArray.map(({ src, alt }, key) => (
      <TechnologiesItemStyled key={key}>
        <img src={src} alt={alt} />
      </TechnologiesItemStyled>
    ))}
  </TechnologiesStyled>
)

Technologies.propTypes = {
  itemsArray: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.node,
    alt: PropTypes.string,
  }))
}

export default Technologies