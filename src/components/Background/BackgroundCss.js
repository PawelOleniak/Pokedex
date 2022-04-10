import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: -1000;
  .background {
    display: block;
    width: 100%;
    min-width: 1100px;
  }
  .skyBackground {
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#19213f' : '#7acaf9')};
  }
`;
