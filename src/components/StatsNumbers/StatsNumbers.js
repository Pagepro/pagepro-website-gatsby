import React from 'react'

import PropTypes from 'prop-types'
import {
  StatsNumbersStyled,
  StatsNumbersDescriptionStyled,
  StatsNumbersNumberStyled,
} from '../StatsNumbers/styledComponents'
import { Typo1, Typo6 } from '../Typography/Typography'

const StatsNumbers = ({
  description,
  number,
  ...otherProps
}) => (
  <StatsNumbersStyled>
    <StatsNumbersDescriptionStyled>
      <Typo6>
        {description}
      </Typo6>
    </StatsNumbersDescriptionStyled>
    <StatsNumbersNumberStyled>
      {number}
    </StatsNumbersNumberStyled>
  </StatsNumbersStyled>
)

StatsNumbers.propTypes = {
  description: PropTypes.string,
  number: PropTypes.string,
}

export default StatsNumbers
