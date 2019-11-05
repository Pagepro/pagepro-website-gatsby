import React from 'react'
import {
  StepStyled,
  StepTitleStyled,
  StepSubtitleStyled,
  StepDescStyled,
} from './styles'
import { Typo4, Typo6 } from '../Typography'

interface IProps {
  title: string
  subtitle: string
  desc: string
}

const Step: React.FC<IProps> = ({
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

export default Step
