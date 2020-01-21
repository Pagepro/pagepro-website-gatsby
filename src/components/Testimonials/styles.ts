import styled from 'styled-components';
import { rgba } from 'polished';

const variables = {
  decorWidth: '1.25rem',
};

const TestimonialsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const TestimonialsImgWrapperStyled = styled.div`
  margin-bottom: calc(1rem * 1.25);
`;

const TestimonialsImgStyled = styled.img`
  margin: 0 auto;
`;

const TestimonialsHeaderStyled = styled.div`
  position: relative;
  margin-bottom: calc(1rem * 1.25);
  flex-grow: 1;

  &::after {
    display: block;
    content: '';
    width: ${variables.decorWidth};
    height: 0.0625rem;
    background: ${props => props.theme.colors.red};
    margin: calc(1rem * 1.25) auto 0;
  }
`;

const TestimonialsNameStyled = styled.div`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.darkGrey};
  margin: 1rem;
`;

const TestimonialsDetailsStyled = styled.div`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.darkGrey};

  .agency {
    margin-top: calc(1rem / 8);
    color: ${props => rgba(props.theme.colors.mediumGrey, 0.6)};
  }
`;

const TestimonialsQuoteStyled = styled.blockquote`
  font-style: italic;
  color: ${props => rgba(props.theme.colors.mediumGrey, 0.6)};
`;

export {
  TestimonialsStyled,
  TestimonialsImgWrapperStyled,
  TestimonialsImgStyled,
  TestimonialsHeaderStyled,
  TestimonialsNameStyled,
  TestimonialsDetailsStyled,
  TestimonialsQuoteStyled,
};
