import styled from 'styled-components';

import Inner from '../Inner';
import { media, customMedia } from '../../common/MediaQueries';

const SectionInnerStyled = styled(Inner)`
  @media ${customMedia.inner} {
    margin-left: calc(50% - ${({ theme }) => theme.sizes.inner} / 2);
  }
`;

const SectionDescStyled = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: center;

  @media ${media.phone} {
    text-align: left;
  }
`;

const SectionContentStyled = styled.div``;

const SectionHeadingStyled = styled.div`
  text-align: center;

  & + ${SectionContentStyled} {
    margin-top: 3rem;
  }

  @media ${media.phone} {
    text-align: left;
  }
`;

export { SectionInnerStyled, SectionHeadingStyled, SectionContentStyled, SectionDescStyled };
