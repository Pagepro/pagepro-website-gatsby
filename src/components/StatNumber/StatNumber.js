import React from 'react'
import PropTypes from 'prop-types'
import {
  StatNumberStyled,
  StatNumberDescriptionStyled,
  StatNumberCountStyled,
} from './styledComponents'
import { Typo6 } from '../Typography'

const StatNumber = ({
  description,
  count,
}) => (
  <StatNumberStyled>
    <StatNumberDescriptionStyled>
      <Typo6>
        {description}
      </Typo6>
    </StatNumberDescriptionStyled>
    <StatNumberCountStyled>
      {count}
    </StatNumberCountStyled>
  </StatNumberStyled>
)

StatNumber.propTypes = {
  description: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
}

export default StatNumber
