import styled from 'styled-components'

const TestimonialsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

const TestimonialsImgWrapperStyled = styled.div`
  margin-bottom: calc(${props => props.theme.size.gutter} * 1.25);
`

const TestimonialsImgStyled = styled.img`
  margin: 0 auto;
`

const TestimonialsHeaderStyled = styled.div`
  position: relative;
  margin-bottom: calc(${props => props.theme.size.gutter} * 1.25);
  flex-grow: 1;

  &::after {
    display: block;
    content: '';
    width: ${props => props.theme.testimonials.decorWidth};
    height: 1px;
    background: ${props => props.theme.color.red};
    margin: calc(${props => props.theme.size.gutter} * 1.25) auto 0;
  }
`

const TestimonialsNameStyled = styled.div`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.color.darkGrey};
  margin: ${props => props.theme.size.gutter};
`

const TestimonialsDetailsStyled = styled.div`
  font-weight: ${props => props.theme.fontWeight.semiBold};

  .agency {
    margin-top: calc(${props => props.theme.size.gutter} / 8);
    color: ${props => props.theme.color.grey};
  }
`

const TestimonialsQuoteStyled = styled.blockquote`
  font-style: italic;
  color: ${props => props.theme.color.grey};
`

export {
  TestimonialsStyled,
  TestimonialsImgWrapperStyled,
  TestimonialsImgStyled,
  TestimonialsHeaderStyled,
  TestimonialsNameStyled,
  TestimonialsDetailsStyled,
  TestimonialsQuoteStyled,
}
