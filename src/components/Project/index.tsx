import React from 'react';

import {
  ProjectStyled,
  ProjectContentStyled,
  ProjectMediaStyled,
  ProjectImgStyled,
  ProjectHeaderStyled,
  ProjectDescStyled,
  ProjectTechnologiesStyled,
  ProjectActionStyled,
} from './styles';
import Link from '../Link';
import { Typo4 } from '../Typography';

interface IProps {
  reversed?: boolean;
  label: string;
  desc: string;
  technologies: string;
  src: string;
  alt: string;
}

const Project: React.FC<IProps> = ({ reversed, label, desc, technologies, ...otherProps }) => (
  <ProjectStyled reversed={reversed} p="2rem 3rem" mt="1rem">
    <ProjectContentStyled>
      <ProjectHeaderStyled>
        <Typo4>{label}</Typo4>
      </ProjectHeaderStyled>
      <ProjectDescStyled>{desc}</ProjectDescStyled>
      <ProjectTechnologiesStyled>{technologies}</ProjectTechnologiesStyled>
      <ProjectMediaStyled>
        <ProjectImgStyled {...otherProps} />
      </ProjectMediaStyled>
      <ProjectActionStyled>
        <Link light={reversed} withArrow iconColor={reversed ? 'white' : 'red'} href="#">
          Read more
        </Link>
      </ProjectActionStyled>
    </ProjectContentStyled>
  </ProjectStyled>
);

Project.defaultProps = {
  reversed: false,
};

export default Project;
