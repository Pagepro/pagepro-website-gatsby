import React from 'react'
import {
  CtaBoxStyled,
  CtaBoxHeaderStyled,
  CtaBoxMarkStyled,
  CtaBoxTextStyled,
  CtaBoxActionsStyled,
} from './styledComponents'
import { Typo2, Typo4 } from '../Typography/Typography'
import ButtonLink from '../ButtonLink/ButtonLink'
import { types, sizes } from '../ButtonLink/styledComponents'

const CtaBox = () => (
  <CtaBoxStyled>
    <CtaBoxHeaderStyled>
      <Typo2 tag="h1">
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
        type={types.primary}
        size={sizes.big}
        left
        href="#"
        btnLabel="Hire us"
      />
      <ButtonLink
        className="button"
        type={types.secondary}
        size={sizes.big}
        left
        href="#"
        btnLabel="Join us"
      />
    </CtaBoxActionsStyled>
  </CtaBoxStyled>
)

export default CtaBox
