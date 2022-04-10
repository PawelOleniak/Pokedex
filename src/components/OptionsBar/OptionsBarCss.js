import styled from 'styled-components';

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? 'darkgray' : 'white')};
  box-shadow: 0px 4px 8px rgba(160, 170, 190, 0.7);
  .searchBar {
    padding: 6px 7px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(110, 120, 140, 0.4);
    border-radius: 25px;
    width: calc(50px + 15vw);
  }
  .icon {
    border: 1px solid gray;
    border-radius: 10px;
    padding: 5px;
    margin: 0 3px;
    cursor: pointer;
  }
  .description {
    display: flex;
    align-items: center;
  }
`;
