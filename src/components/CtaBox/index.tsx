import React from 'react';

import { CtaBoxStyled, CtaBoxHeaderStyled, CtaBoxMarkStyled, CtaBoxTextStyled, CtaBoxActionsStyled } from './styles';
import { Typo2, Typo4, Typo5 } from '../Typography';
import ButtonLink from '../ButtonLink';
import { ButtonLinkType, ButtonLinkSize } from '../ButtonLink/styles';

const CtaBox = () => (
  <CtaBoxStyled>
    <CtaBoxHeaderStyled>
      <Typo2 as="h1" fontWeight="semiBold">
        React Developers
        <CtaBoxMarkStyled>who deliver.</CtaBoxMarkStyled>
      </Typo2>
    </CtaBoxHeaderStyled>
    <CtaBoxTextStyled>
      <Typo4>
        We are engaged, T-shaped, and we can’t wait <br />
        to <span>build your web or mobile product</span>,<br />
        or <span>become the part of your remote team</span>.
      </Typo4>
    </CtaBoxTextStyled>
    <CtaBoxActionsStyled>
      <ButtonLink type={ButtonLinkType.primary} size={ButtonLinkSize.big} href="#">
        <Typo5 fontWeight="semiBold">Hire us</Typo5>
      </ButtonLink>
      <ButtonLink type={ButtonLinkType.secondary} size={ButtonLinkSize.big} href="#">
        <Typo5 fontWeight="bold">Join us</Typo5>
      </ButtonLink>
    </CtaBoxActionsStyled>
  </CtaBoxStyled>
);

export default CtaBox;
