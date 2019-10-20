import styled from 'styled-components'

const variables = {
  borderColor: '#0E3145',
}

const BenefitStyled = styled.div`
  width: 100%;
  padding-top: ${props => props.theme.gutter.gutter24};
  padding-bottom: ${props => props.theme.gutter.gutter24};
  padding-right: ${props => props.theme.gutter.gutter40};
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: ${props => props.theme.gutter.gutter40};
    display: flex;
    height: 100%;
    width: ${props => `calc(100% - ${props.theme.gutter.gutter40})`};
    z-index: 0;
    content: '';
    background: ${variables.borderColor};
  }
`
const BenefitTitleStyled = styled.div`
  position: relative;
  text-transform: uppercase;
  color: ${props => props.theme.color.red};
`

const BenefitDescriptionStyled = styled.div`
  position: relative;
  margin-top: ${props => props.theme.gutter.gutter16};
  color: ${props => props.theme.color.white};
`

export {
  BenefitStyled,
  BenefitDescriptionStyled,
  BenefitTitleStyled,
}
