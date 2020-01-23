import styled from 'styled-components';

const variables = {
  bgDecorWidth: '8.75rem',
  bgDecorHeight: '7.125rem',
  countFontSize: '4.25rem',
};

const StatNumberStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0.375rem;
    display: block;
    height: 100%;
    width: ${variables.bgDecorWidth};
    min-height: ${variables.bgDecorHeight};
    content: '';
    background: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const StatNumberDescriptionStyled = styled.div`
  line-height: ${({ theme }) => theme.lineHeights.normal};
`;

const StatNumberCountStyled = styled.div`
  font-size: ${variables.countFontSize};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.red};
`;

export { StatNumberStyled, StatNumberDescriptionStyled, StatNumberCountStyled };
