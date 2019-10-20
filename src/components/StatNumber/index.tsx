import * as React from 'react'
import {
  StatNumberStyled,
  StatNumberDescriptionStyled,
  StatNumberCountStyled,
} from './styles'
import { Typo6 } from '../Typography'

interface IProps {
  description: string
  count: string
}

const StatNumber: React.FC<IProps> = ({
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

export default StatNumber
