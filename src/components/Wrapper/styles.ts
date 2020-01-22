import styled from 'styled-components';

interface IWrapperStyledProps {
  background?: string;
  padding?: string;
}

const WrapperStyled = styled.div<IWrapperStyledProps>`
  ${({ padding }: IWrapperStyledProps) => padding && `padding: ${padding}`}
  ${({ background }: IWrapperStyledProps) => background && `background: ${background}`}
`;

export default WrapperStyled;
