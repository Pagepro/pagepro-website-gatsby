import React from 'react'
import PropTypes from 'prop-types'
import {
  StatsNumbersStyled,
  StatsNumbersDescriptionStyled,
  StatsNumbersCountStyled,
} from './styledComponents'
import { Typo6 } from '../Typography/Typography'

const StatsNumbers = ({
  description,
  count
}) => (
  <StatsNumbersStyled>
    <StatsNumbersDescriptionStyled>
      <Typo6>
        {description}
      </Typo6>
    </StatsNumbersDescriptionStyled>
    <StatsNumbersCountStyled>
      {count}
    </StatsNumbersCountStyled>
  </StatsNumbersStyled>
)

StatsNumbers.propTypes = {
  description: PropTypes.string,
  count: PropTypes.string,
}

export default StatsNumbers
