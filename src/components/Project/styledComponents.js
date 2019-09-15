import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { decorLine } from '../../common/mixins'
import theme from '../../themes/theme'

const variables = {
  projectMinHeight: '294px',
}

const ProjectContentStyled = styled.div`
  width: 50%;
  padding-right: ${props => props.theme.gutter.gutter64};
`

const ProjectMediaStyled = styled.div`
  position: absolute;
  left: 50%;
  top: calc(-${props => props.theme.gutter.gutter16});
`

const ProjectImgStyled = styled.img`
  box-shadow: 0px 0px 12px ${props => rgba(
    props.theme.color.black,
    props.theme.opacities.opacity20
  )};
`

const ProjectHeaderStyled = styled.div`
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  margin-bottom: ${props => props.theme.gutter.gutter16};
`

const ProjectDescStyled = styled.div`
  margin-bottom: ${props => props.theme.gutter.gutter24};
`

const ProjectTechnologiesStyled = styled.div`
  ${decorLine({ backgroundColor: `${theme.color.red}` })}
  padding-top: ${props => props.theme.gutter.gutter24};
  margin-bottom: ${props => props.theme.gutter.gutter16};
`

const ProjectActionStyled = styled.div``

const ProjectStyled = styled.div`
  position: relative;
  width: 100%;
  padding: (${props => props.theme.gutter.gutter32}
    ${props => props.theme.gutter.gutter48}
  );
  margin-top: ${props => props.theme.gutter.gutter16};
  min-height: ${variables.projectMinHeight};
  background: ${props => rgba(
    props.theme.color.mediumGrey,
    props.theme.opacities.opacity20)
};

  /* Reversed */
  ${({ reversed }) => reversed && css`
    background: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};

    ${ProjectMediaStyled} {
      left: ${props => props.theme.gutter.gutter48};
    }
    ${ProjectContentStyled} {
      width: 100%;
      padding-right: 0;
      padding-left: calc(50% + ${props => props.theme.gutter.gutter64});
    }
    ${ProjectTechnologiesStyled} {
      ${decorLine}
    }
  `}
`

export {
  ProjectStyled,
  ProjectContentStyled,
  ProjectMediaStyled,
  ProjectImgStyled,
  ProjectHeaderStyled,
  ProjectDescStyled,
  ProjectTechnologiesStyled,
  ProjectActionStyled,
}
