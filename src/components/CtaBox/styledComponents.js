import styled from 'styled-components'

const CtaBoxStyled = styled.div`
  max-width: ${props => props.theme.ctaBox.width};
  width: 100%;
`

const CtaBoxHeaderStyled = styled.div`
  color: ${props => props.theme.color.lightGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  margin-bottom: calc(${props => props.theme.size.gutter} * 3.5);
`

const CtaBoxMarkStyled = styled.span`
  display: block;
  color: ${props => props.theme.color.red};
`

const CtaBoxTextStyled = styled.div`
  color: ${props => props.theme.color.lightGrey};
  margin-bottom: calc(${props => props.theme.size.gutter} * 3.5);
`

const CtaBoxActionsStyled = styled.div`
  display: flex;
  .button:not(:last-child) {
    margin-right: calc(${props => props.theme.size.gutter} * 2);
  }
`

export {
  CtaBoxStyled,
  CtaBoxHeaderStyled,
  CtaBoxMarkStyled,
  CtaBoxTextStyled,
  CtaBoxActionsStyled,
}
