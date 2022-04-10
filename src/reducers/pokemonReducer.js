import { createSlice, current } from '@reduxjs/toolkit';
import { filterUnusedData } from 'helpers';

const initialState = { pokemons: {}, selectedPokemons: {}, pokemonTypes: [], isLoading: false };
const checkIsPayloadNull = (state, action, set) => {
  if (action.payload === undefined) {
    state[set]['error'] = 'error';
    return true;
  }
  return false;
};
const pokemonSlice = createSlice({
  name: 'pokeSlice',
  initialState: initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (checkIsPayloadNull(state, action, 'pokemons')) {
        return state;
      }
      const filteredData = filterUnusedData(action.payload);
      state.pokemons[action.payload.name] = filteredData;
    },
    setSelectedPokemons: (state, action) => {
      if (checkIsPayloadNull(state, action, 'selectedPokemons')) {
        return state;
      }
      if (current(state).pokemons[action.payload.name]) {
        state.selectedPokemons[action.payload.name] = current(state).pokemons[action.payload.name];
        return state;
      }

      const filteredData = filterUnusedData(action.payload);
      state.selectedPokemons[action.payload.name] = filteredData;
    },
    setPokemonTypes: (state, action) => {
      state.pokemonTypes = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearSelectedPokemons: (state, action) => {
      state.selectedPokemons = {};
    },
  },
});

export default pokemonSlice.reducer;
export const { addPokemon, setSelectedPokemons, clearSelectedPokemons, setPokemonTypes, setIsLoading } =
  pokemonSlice.actions;
