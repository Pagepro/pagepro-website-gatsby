import React from 'react'

import { Typo5, Typo6 } from '../Typography'
import theme from '../../themes/theme'
import {
  BenefitStyled,
  BenefitDescriptionStyled,
  BenefitTitleStyled,
} from './styles'

interface IProps {
  description: string
  title: string
}

const Benefit: React.FC<IProps> = ({
  description,
  title,
}) => (
  <BenefitStyled>
    <BenefitTitleStyled>
      <Typo5
        as="h3"
        fontWeight={theme.fontWeight.semiBold}
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

export default Benefit
