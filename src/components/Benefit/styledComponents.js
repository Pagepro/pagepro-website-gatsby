import styled from 'styled-components'
import { rgba } from 'polished'

const variables = {
  descriptionWidth: '228px',
  bgDecorWidth: '228px',
  bgDecorHeight: '294px',
}

const BenefitStyled = styled.div`
  width: 100%;
  padding-top: ${props => props.theme.gutter.gutter24};
  padding-bottom: ${props => props.theme.gutter.gutter24};
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 44px;
    display: block;
    height: 100%;
    width: ${variables.bgDecorWidth};
    min-height: ${variables.bgDecorHeight};
    z-index: 0;
    content: '';
    background: ${props => rgba(
      props.theme.color.white,
      props.theme.opacities.opacity20)
    };
  }
`
const BenefitTitleStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: ${props => props.theme.lineHeight.small};
  color: ${props => props.theme.color.red};
`

const BenefitDescriptionStyled = styled.div`
  position: relative;
  max-width: 196px;
  margin-top: ${props => props.theme.gutter.gutter16};
  color: ${props => props.theme.color.white};
  line-height: ${props => props.theme.lineHeight.medium};
`

export {
  BenefitStyled,
  BenefitDescriptionStyled,
  BenefitTitleStyled,
}
