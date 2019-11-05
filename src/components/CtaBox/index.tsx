import React from 'react'

import {
  CtaBoxStyled,
  CtaBoxHeaderStyled,
  CtaBoxMarkStyled,
  CtaBoxTextStyled,
  CtaBoxActionsStyled,
} from './styles'
import { Typo2, Typo4 } from '../Typography'
import ButtonLink from '../ButtonLink'
import { ButtonLinkType, ButtonLinkSize } from '../ButtonLink/styles'

const CtaBox = () => (
  <CtaBoxStyled>
    <CtaBoxHeaderStyled>
      <Typo2 as="h1">
        React Developers
        <CtaBoxMarkStyled>who deliver.</CtaBoxMarkStyled>
      </Typo2>
    </CtaBoxHeaderStyled>
    <CtaBoxTextStyled>
      <Typo4>
        We provide startups and scale up businesses with hands-on technical
        leadership and high-performing engeneering teams.
      </Typo4>
    </CtaBoxTextStyled>
    <CtaBoxActionsStyled>
      <ButtonLink
        className="button"
        type={ButtonLinkType.primary}
        size={ButtonLinkSize.big}
        left
        href="#"
      >
        Hire us
      </ButtonLink>
      <ButtonLink
        className="button"
        type={ButtonLinkType.secondary}
        size={ButtonLinkSize.big}
        left
        href="#"
      >
        Join us
      </ButtonLink>
    </CtaBoxActionsStyled>
  </CtaBoxStyled>
)

export default CtaBox
