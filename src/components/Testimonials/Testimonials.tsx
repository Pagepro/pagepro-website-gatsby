import * as React from 'react'
import {
  TestimonialsStyled,
  TestimonialsImgWrapperStyled,
  TestimonialsImgStyled,
  TestimonialsHeaderStyled,
  TestimonialsNameStyled,
  TestimonialsDetailsStyled,
  TestimonialsQuoteStyled,
} from './styledComponents'
import { Typo3, Typo5, Typo6 } from '../Typography'

interface IProps {
  name: string
  profession: string
  agency: string
  src: string
  alt: string
}

const Testimonials: React.FC<IProps> = ({
  name,
  profession,
  agency,
  children,
  ...otherProps
}) => (
  <TestimonialsStyled>
    <TestimonialsHeaderStyled>
      <TestimonialsImgWrapperStyled>
        <TestimonialsImgStyled {...otherProps} />
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
        {children}
      </Typo6>
    </TestimonialsQuoteStyled>
  </TestimonialsStyled>
)

export default Testimonials
