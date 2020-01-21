import styled from 'styled-components';
import { transition } from '../../common/mixins';

const SocialMediaLinkStyled = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${props => props.theme.colors.lightGrey};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  ${transition}
`;

const SocialMediaListStyled = styled.ul`
  display: flex;
  margin-left: -0.5rem;

  &:hover {
    ${SocialMediaLinkStyled} {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const SocialMediaItemStyled = styled.li``;

const SocialMediaIconStyled = styled.span`
  display: flex;
  font-size: 1rem;

  svg {
    fill: currentColor;
  }
`;

export { SocialMediaListStyled, SocialMediaItemStyled, SocialMediaLinkStyled, SocialMediaIconStyled };
