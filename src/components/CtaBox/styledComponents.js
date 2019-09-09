import styled from 'styled-components'

const CtaBoxStyled = styled.div`
  max-width: ${props => props.theme.ctaBox.width};
  width: 100%;
`

const CtaBoxHeaderStyled = styled.div`
  color: ${props => props.theme.color.lightGrey};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: ${props => props.theme.lineHeight.small};
  margin-bottom: calc(${props => props.theme.gutter.gutter16} * 3.5);
`

const CtaBoxMarkStyled = styled.span`
  display: block;
  color: ${props => props.theme.color.red};
`

const CtaBoxTextStyled = styled.div`
  color: ${props => props.theme.color.lightGrey};
  line-height: ${props => props.theme.lineHeight.big};
  margin-bottom: calc(${props => props.theme.gutter.gutter16} * 3.5);
`

const CtaBoxActionsStyled = styled.div`
  display: flex;
  .button:not(:last-child) {
    margin-right: calc(${props => props.theme.gutter.gutter32});
  }
`

export {
  CtaBoxStyled,
  CtaBoxHeaderStyled,
  CtaBoxMarkStyled,
  CtaBoxTextStyled,
  CtaBoxActionsStyled,
}
