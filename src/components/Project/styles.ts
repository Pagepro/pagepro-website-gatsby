import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { decorLine } from '../../common/mixins';
import Container from '../Container';

interface IProjectStyledProps {
  reversed?: boolean;
}

const variables = {
  projectMinHeight: '18.375rem',
};

const ProjectContentStyled = styled.div`
  width: 50%;
  padding-right: 4rem;
`;

const ProjectMediaStyled = styled.div`
  position: absolute;
  left: 50%;
  top: calc(-1rem);
`;

const ProjectImgStyled = styled.img`
  box-shadow: 0px 0 0.75rem ${props => rgba(props.theme.colors.black, 0.2)};
`;

const ProjectHeaderStyled = styled.div`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: 1rem;
`;

const ProjectDescStyled = styled.div`
  margin-bottom: 1.5rem;
`;

const ProjectTechnologiesStyled = styled.div`
  ${({ theme }) => decorLine({ theme, backgroundColor: theme.colors.red })}
  padding-top: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectActionStyled = styled.div``;

const ProjectStyled = styled(Container)<IProjectStyledProps>`
  position: relative;
  width: 100%;
  min-height: ${variables.projectMinHeight};
  background: ${props => rgba(props.theme.colors.mediumGrey, 0.2)};

  /* Reversed */
  ${({ reversed, theme }) =>
    reversed &&
    css`
      background: ${theme.colors.red};
      color: ${theme.colors.white};

      ${ProjectMediaStyled} {
        left: 3rem;
      }
      ${ProjectContentStyled} {
        width: 100%;
        padding-right: 0;
        padding-left: calc(50% + 4rem);
      }
      ${ProjectTechnologiesStyled} {
        ${decorLine}
      }
    `}
`;

export {
  ProjectStyled,
  ProjectContentStyled,
  ProjectMediaStyled,
  ProjectImgStyled,
  ProjectHeaderStyled,
  ProjectDescStyled,
  ProjectTechnologiesStyled,
  ProjectActionStyled,
};
