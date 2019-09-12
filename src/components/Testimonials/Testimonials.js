import React from 'react'
import PropTypes from 'prop-types'
import {
  TestimonialsStyled,
  TestimonialsImgWrapperStyled,
  TestimonialsImgStyled,
  TestimonialsHeaderStyled,
  TestimonialsNameStyled,
  TestimonialsDetailsStyled,
  TestimonialsQuoteStyled,
} from '../Testimonials/styledComponents'
import { Typo3, Typo5, Typo6 } from '../Typography/Typography'

const Testimonials = ({
  name,
  profession,
  agency,
  quote,
  ...otherProps
}) => (
  <TestimonialsStyled>
    <TestimonialsHeaderStyled>
      <TestimonialsImgWrapperStyled>
        <TestimonialsImgStyled  {...otherProps} />
      </TestimonialsImgWrapperStyled>
        <TestimonialsNameStyled>
          <Typo3>{name}</Typo3>
      </TestimonialsNameStyled>
      <TestimonialsDetailsStyled>
        <Typo5>{profession}</Typo5>
        <Typo6 className="agency">{agency}</Typo6>
      </TestimonialsDetailsStyled>
    </TestimonialsHeaderStyled>
    <TestimonialsQuoteStyled>
      <Typo6>
        {quote}
      </Typo6>
    </TestimonialsQuoteStyled>
  </TestimonialsStyled>
)

Testimonials.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  agency: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  quote: PropTypes.string,
}

export default Testimonials
