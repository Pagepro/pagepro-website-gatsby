import styled from 'styled-components';

import ButtonLinkStyled from '../ButtonLink/styles';
import { media } from '../../common/MediaQueries';

const variables = {
  width: '45rem',
};

const CtaBoxStyled = styled.div`
  max-width: ${variables.width};
  width: 100%;
`;

const CtaBoxHeaderStyled = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.small};
  margin-bottom: 1.5rem;

  @media ${media.phone} {
    margin-bottom: 3rem;
  }
`;

const CtaBoxTextStyled = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  line-height: ${({ theme }) => theme.lineHeights.big};
  margin-bottom: 1.5rem;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.red};
  }

  br {
    display: none;
  }

  @media ${media.phone} {
    margin-bottom: 3rem;
    br {
      display: inline;
    }
  }
`;

const CtaBoxActionsStyled = styled.div`
  display: inline-flex;
  flex-direction: column;

  ${ButtonLinkStyled}:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media ${media.phone} {
    flex-direction: row;
    ${ButtonLinkStyled}:not(:last-child) {
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }
`;

export { CtaBoxStyled, CtaBoxHeaderStyled, CtaBoxTextStyled, CtaBoxActionsStyled };
