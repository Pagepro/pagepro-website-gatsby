import React from 'react'

import {
  CtaBoxStyled,
  CtaBoxHeaderStyled,
  CtaBoxMarkStyled,
  CtaBoxTextStyled,
  CtaBoxActionsStyled
} from './styledComponents'
import { Typo2, Heading3 } from '../Typography/Typography'
import ButtonLink, { types, sizes } from '../ButtonLink/ButtonLink'

const CtaBox = () => (
  <CtaBoxStyled>
    <CtaBoxHeaderStyled>
      <Heading3 tag="h1">
        React Developers <CtaBoxMarkStyled>who deliver.</CtaBoxMarkStyled>
      </Heading3>
    </CtaBoxHeaderStyled>
    <CtaBoxTextStyled>
      <Typo2>We provide startups and scale up businesses with hands-on technical
      leadership and high-performing engeneering teams.</Typo2>
    </CtaBoxTextStyled>
    <CtaBoxActionsStyled>
        <ButtonLink
          className="button"
          type={types.primary}
          size={sizes.big}
          left
          btnUrl="#"
          btnLabel="Hire us"
        />

        <ButtonLink
          className="button"
          type={types.secondary}
          size={sizes.big}
          left
          btnUrl="#"
          btnLabel="Join us"
        />
    </CtaBoxActionsStyled>
  </CtaBoxStyled>
)

export default CtaBox
