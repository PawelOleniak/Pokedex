import styled from 'styled-components';

export const PokemonWrapper = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .photos {
    display: flex;
    justify-content: center;
  }
  .photo {
    position: relative;
    width: 150px;
  }
`;
