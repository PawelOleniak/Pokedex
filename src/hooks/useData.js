import { getPokemonDataById, getPokemonIdByType, getPokemonTypes } from 'helpers';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addPokemon,
  clearSelectedPokemons,
  setIsLoading,
  setPokemonTypes,
  setSelectedPokemons,
} from 'reducers/pokemonReducer';

const useData = ({ loadTo, loadFrom, searched, selectedType }) => {
  const dispatch = useDispatch();

  const getPokemonsById = useCallback(() => {
    dispatch(setIsLoading(true));
    for (let i = loadFrom + 1; i <= loadTo; i++) {
      getPokemonDataById(i).then((res) => dispatch(addPokemon(res.data)));
    }
  }, [loadTo, loadFrom, dispatch]);

  const searchPokemon = useCallback(
    (searched) => {
      dispatch(setIsLoading(true));
      getPokemonDataById(searched).then((res) => {
        dispatch(clearSelectedPokemons());
        dispatch(setSelectedPokemons(res.data));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (searched) {
      searchPokemon(searched);
    } else {
      getPokemonsById();
    }
  }, [getPokemonsById, searched, searchPokemon]);

  useEffect(() => {
    getPokemonTypes().then((res) => {
      const types = res.data.results;
      dispatch(setPokemonTypes(types));
    });
  }, [dispatch]);

  useEffect(() => {
    if (selectedType) {
      dispatch(setIsLoading(true));
      getPokemonIdByType(selectedType).then((res) => {
        const names = res.data.pokemon.map(({ pokemon }) => pokemon.name);
        console.log(loadTo);
        for (let i = 1; i <= loadTo; i++) {
          getPokemonDataById(names[i]).then((res) => dispatch(setSelectedPokemons(res.data)));
        }
      });
    }
  }, [dispatch, selectedType, loadTo, loadFrom]);
};
export default useData;
