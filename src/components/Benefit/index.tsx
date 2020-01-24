import React from 'react';

import { Typo5, Typo6 } from '../Typography';
import { BenefitStyled, BenefitDescriptionStyled, BenefitTitleStyled } from './styles';

interface IProps {
  description: string;
  title: string;
}

const Benefit: React.FC<IProps> = ({ description, title }) => (
  <BenefitStyled pt="1.5rem" pr="2.5rem" pb="1.5rem">
    <BenefitTitleStyled>
      <Typo5 as="h3" fontWeight="semiBold">
        {title}
      </Typo5>
    </BenefitTitleStyled>
    <BenefitDescriptionStyled>
      <Typo6>{description}</Typo6>
    </BenefitDescriptionStyled>
  </BenefitStyled>
);

export default Benefit;
