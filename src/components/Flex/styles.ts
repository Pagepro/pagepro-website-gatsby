import styled from 'styled-components';

import { flex, flexDirection, flexWrap, justifyContent, alignItems, alignContent, FlexboxProps } from 'styled-system';

type IFlexboxProp = FlexboxProps;

const FlexStyled = styled('div')<IFlexboxProp>`
  display: flex;
  ${flex}
  ${flexDirection}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
`;

export default FlexStyled;
