import React from 'react'
import PropTypes from 'prop-types'
import {
  StepStyled,
  StepTitleStyled,
  StepSubtitleStyled,
  StepDescStyled,
} from './styledComponents'
import { Typo4, Typo6 } from '../Typography/Typography'

const Step = ({
  title,
  subtitle,
  desc,
}) => (
  <StepStyled>
    <StepTitleStyled>
      <Typo4>
        {title}
      </Typo4>
    </StepTitleStyled>
    <StepSubtitleStyled>
      <Typo4>
        {subtitle}
      </Typo4>
    </StepSubtitleStyled>
    <StepDescStyled>
      <Typo6>
        {desc}
      </Typo6>
    </StepDescStyled>
  </StepStyled>
)

Step.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Step
