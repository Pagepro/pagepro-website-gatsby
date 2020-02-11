import React from 'react';

import { CtaBoxStyled, CtaBoxHeaderStyled, CtaBoxTextStyled, CtaBoxActionsStyled } from './styles';
import { Typo2, Typo4, Typo5 } from '../Typography';
import ButtonLink from '../ButtonLink';
import { ButtonLinkType, ButtonLinkSize } from '../ButtonLink/styles';

const CtaBox = () => (
  <CtaBoxStyled>
    <CtaBoxHeaderStyled>
      <Typo2 as="h1" fontWeight="semiBold">
        React Developers who make an impact.
      </Typo2>
    </CtaBoxHeaderStyled>
    <CtaBoxTextStyled>
      <Typo4>
        We are engaged, T-shaped developers who can’t <br />
        wait to <span>build your web or mobile</span> product <br />
        or <span>argument your team</span> remotely.
      </Typo4>
    </CtaBoxTextStyled>
    <CtaBoxActionsStyled>
      <ButtonLink type={ButtonLinkType.primary} size={ButtonLinkSize.big} href="#">
        <Typo5 fontWeight="semiBold">Hire us</Typo5>
      </ButtonLink>
      <ButtonLink type={ButtonLinkType.secondary} size={ButtonLinkSize.big} href="#">
        <Typo5 fontWeight="semiBold">Join us</Typo5>
      </ButtonLink>
    </CtaBoxActionsStyled>
  </CtaBoxStyled>
);

export default CtaBox;
