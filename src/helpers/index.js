import axios from 'axios';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const LibraryValues = ['height', 'weight', 'stats', 'types', 'sprites', 'abilites', 'types'];

export const getPokemonDataById = async (id) => {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
  return await axios.get(url).catch((e) => {
    //forces to return action.payload=undefined into dispatch
    return '';
  });
};
export const getPokemonTypes = async () => {
  const url = 'https://pokeapi.co/api/v2/type';
  return await axios.get(url).catch((e) => {
    //forces to return action.payload=undefined into dispatch
    return '';
  });
};
export const getPokemonIdByType = async (type) => {
  const url = 'https://pokeapi.co/api/v2/type/' + type;
  return await axios.get(url).catch((e) => {
    //forces to return action.payload=undefined into dispatch
    return '';
  });
};
export const filterUnusedData = (data) => {
  const finalData = Object.fromEntries(
    // eslint-disable-next-line array-callback-return
    Object.entries(data).filter(([key]) => {
      for (const index in LibraryValues) {
        if (key === LibraryValues[index]) {
          return true;
        }
      }
    })
  );

  return finalData;
};
