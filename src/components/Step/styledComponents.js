import styled from 'styled-components'

const variables = {
  width: '400px',
}

const StepStyled = styled.div`
  max-width: ${variables.width};
  padding: ${props => props.theme.gutter.gutter32};
  border: 2px solid ${props => props.theme.color.lightGrey};
`

const StepTitleStyled = styled.div`
  text-transform: uppercase;
  line-height: ${props => props.theme.lineHeight.normal};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

const StepSubtitleStyled = styled.div`
  margin-top: ${props => props.theme.gutter.gutter32};
  color: ${props => props.theme.color.red};
  line-height: ${props => props.theme.lineHeight.normal};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

const StepDescStyled = styled.div`
  margin-top: ${props => props.theme.gutter.gutter48};
  line-height: ${props => props.theme.lineHeight.big};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`

export {
  StepStyled,
  StepTitleStyled,
  StepSubtitleStyled,
  StepDescStyled,
}
