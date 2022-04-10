import { capitalizeFirstLetter } from 'helpers';
import React from 'react';
import { ListPokeWrapper } from './ListPokemonCss';

const ListPokemon = ({ pokemon, id, handleSelectPokemon }) => {
  return (
    <ListPokeWrapper onClick={() => handleSelectPokemon(id)}>
      <h3>{capitalizeFirstLetter(id)}</h3>
      <img className="listPhoto" src={pokemon.sprites.front_default} alt="FAIL" />
    </ListPokeWrapper>
  );
};

export default ListPokemon;
