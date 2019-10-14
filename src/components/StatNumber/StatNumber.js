import React from 'react'
import PropTypes from 'prop-types'
import {
  StatNumberStyled,
  StatNumberDescriptionStyled,
  StatNumberCountStyled,
} from './styledComponents'
import { Typo6 } from '../Typography/Typography'

const StatNumber = ({
  description,
  count,
  reversed,
}) => (
  <StatNumberStyled reversed={reversed}>
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
  reversed: PropTypes.bool,
}

StatNumber.defaultProps = {
  reversed: false,
}

export default StatNumber
