import styled from 'styled-components';

export const LibraryWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  list-style: none;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
  .filler {
    height: 200px;
  }
  .listWrapper {
    display: ${({ columnNum }) => (columnNum === 1 ? 'flex' : 'grid')};
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
  }
`;
