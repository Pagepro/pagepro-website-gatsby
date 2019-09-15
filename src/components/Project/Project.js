import React from 'react'
import PropTypes from 'prop-types'
import {
  ProjectStyled,
  ProjectContentStyled,
  ProjectMediaStyled,
  ProjectImgStyled,
  ProjectHeaderStyled,
  ProjectDescStyled,
  ProjectTechnologiesStyled,
  ProjectActionStyled,
} from './styledComponents'
import theme from '../../themes/theme'
import Link from '../Link/Link'
import { Typo4 } from '../Typography/Typography'

const Project = ({
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
              label="Read more"
            />
          ) : (
            <Link
              withArrow
              iconColor={theme.color.red}
              href="#"
              label="Read more"
            />
          )}
      </ProjectActionStyled>
    </ProjectContentStyled>
  </ProjectStyled>
)

Project.propTypes = {
  reversed: PropTypes.bool,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

Project.defaultProps = {
  reversed: false,
}

export default Project
