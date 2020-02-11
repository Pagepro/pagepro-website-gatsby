import styled from 'styled-components';

import { IColor } from '../../themes/variables';

export interface IProps {
  color?: IColor;
  width?: string;
}

export const Icon = styled.span<IProps>`
  display: inline-flex;
  flex-shrink: 0;
  color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.color.black)};

  svg {
    width: ${props => (props.color ? props.width : '1em')};
    height: 1em;
    fill: currentColor;
  }
`;
