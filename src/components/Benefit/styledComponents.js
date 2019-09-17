import styled from 'styled-components'
import { rgba } from 'polished'

const variables = {
  borderColor: '#0E3145',
  descriptionWidth: '228px',
  bgDecorWidth: '228px',
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
    display: flex;
    height: 100%;
    width: 100%;
    z-index: 0;
    content: '';
    background: ${variables.borderColor};
  }
`
const BenefitTitleStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.color.red};
`

const BenefitDescriptionStyled = styled.div`
  position: relative;
  max-width: 220px;
  margin-top: ${props => props.theme.gutter.gutter16};
  color: ${props => props.theme.color.white};
`

export {
  BenefitStyled,
  BenefitDescriptionStyled,
  BenefitTitleStyled,
}
