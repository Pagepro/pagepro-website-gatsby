import styled from 'styled-components';

import Container from '../Container';
import { customMedia } from '../../common/MediaQueries';

const SliderStyled = styled(Container)`
  display: flex;

  @media ${customMedia.inner} {
    width: calc(100vw - ((100vw - ${({ theme }) => theme.sizes.inner}) / 2) - 1rem);
  }
`;

const SliderItemStyled = styled(Container)`
  flex-shrink: 0;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export { SliderStyled, SliderItemStyled };
