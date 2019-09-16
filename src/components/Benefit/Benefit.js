import React from 'react'
import PropTypes from 'prop-types'
import { Typo5, Typo6 } from '../Typography/Typography'
import theme from '../../themes/theme'
import {
  BenefitStyled,
  BenefitDescriptionStyled,
  BenefitTitleStyled,
} from './styledComponents'

const Benefit = ({
  description,
  title
}) => (
  <BenefitStyled>
    <BenefitTitleStyled>
      <Typo5
        tag="h3"
        fontWeight={theme.fontWeight.bold}
      >
        {title}
      </Typo5>
    </BenefitTitleStyled>
    <BenefitDescriptionStyled>
      <Typo6>
        {description}
      </Typo6>
    </BenefitDescriptionStyled>
  </BenefitStyled>
)

Benefit.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Benefit
