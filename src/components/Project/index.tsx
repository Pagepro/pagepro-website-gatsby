import React from 'react'

import {
  ProjectStyled,
  ProjectContentStyled,
  ProjectMediaStyled,
  ProjectImgStyled,
  ProjectHeaderStyled,
  ProjectDescStyled,
  ProjectTechnologiesStyled,
  ProjectActionStyled,
} from './styles'
import theme from '../../themes/theme'
import Link from '../Link'
import { Typo4 } from '../Typography'

interface IProps {
  reversed?: boolean
  label: string
  desc: string
  technologies: string
  src: string
  alt: string
}

const Project: React.FC<IProps> = ({
  reversed,
  label,
  desc,
  technologies,
  ...otherProps
}) => (
  <ProjectStyled reversed={reversed}>
    <ProjectContentStyled>
      <ProjectHeaderStyled>
        <Typo4>{label}</Typo4>
      </ProjectHeaderStyled>
      <ProjectDescStyled>
        {desc}
      </ProjectDescStyled>
      <ProjectTechnologiesStyled>
        {technologies}
      </ProjectTechnologiesStyled>
      <ProjectMediaStyled>
        <ProjectImgStyled {...otherProps} />
      </ProjectMediaStyled>
      <ProjectActionStyled>
        {reversed
          ? (
            <Link
              light
              withArrow
              iconColor={theme.color.white}
              href="#"
            >
              Read more
            </Link>
          ) : (
            <Link
              withArrow
              iconColor={theme.color.red}
              href="#"
            >
              Read more
            </Link>
          )}
      </ProjectActionStyled>
    </ProjectContentStyled>
  </ProjectStyled>
)



Project.defaultProps = {
  reversed: false,
}

export default Project
