import { capitalizeFirstLetter } from 'helpers';
import React, { useState } from 'react';
import { PokemonWrapper } from './PokemonCss';
import { lazily } from 'react-lazily';
const {
  GiBroadsword,
  GiRosaShield,
  GiHearts,
  GiFluffyWing,
  GiPointySword,
  GiEyeShield,
  GiWeight,
  GiBodyHeight,
  GiStarFormation,
} = lazily(() => import('react-icons/gi'));

export const statIcons = {
  attack: <GiBroadsword />,
  defense: <GiRosaShield />,
  hp: <GiHearts />,
  speed: <GiFluffyWing />,
  'special-attack': <GiPointySword />,
  'special-defense': <GiEyeShield />,
  weight: <GiWeight />,
  height: <GiBodyHeight />,
  types: <GiStarFormation />,
};

const Pokemon = ({ id, pokemons }) => {
  const pokemon = pokemons[id];
  const stats = pokemon.stats.map((el) => (
    <div key={el.stat.name}>
      {statIcons[el.stat.name]} {el.stat.name + ' :' + el.base_stat}
    </div>
  ));
  [stats[3], stats[5]] = [stats[5], stats[3]];
  [stats[4], stats[5]] = [stats[5], stats[4]];

  stats.push(
    <div key="weight">
      {statIcons['weight']}
      {'weight: ' + pokemon.weight}
    </div>
  );
  stats.push(
    <div key="height">
      {statIcons['height']}
      {'height: ' + pokemon.height}
    </div>
  );
  const pokemonTypes = pokemon.types.map((el) => el.type.name);
  stats.push(
    <div key="types">
      {statIcons['types']}
      {'types: ' + pokemonTypes}
    </div>
  );
  const [isBack, setIsBack] = useState(false);
  return (
    <PokemonWrapper>
      <h3>{capitalizeFirstLetter(id)}</h3>
      <div className="photos" onMouseOver={() => setIsBack(true)} onMouseOut={() => setIsBack(false)}>
        <img className="photo" src={isBack ? pokemon.sprites.back_default : pokemon.sprites.front_default} alt="img" />
      </div>
      <div className="stats">{stats}</div>
    </PokemonWrapper>
  );
};

export default Pokemon;
