import React, { Suspense, useState } from 'react';
import { LibraryWrapper } from './LibraryCss';
import { useDispatch, useSelector } from 'react-redux';
import { Background, Button, ListPokemon, LoadingIndicator, Modal, Pokemon } from 'components';

import { INITIALPOKEMONPERPAGE } from 'consts';
import { setIsLoading } from 'reducers/pokemonReducer';
import useData from 'hooks/useData';

const pokemonList = (data, collection, handleSelectPokemon) =>
  data
    ? Object.keys(collection).map((key) => {
        return <ListPokemon key={key} id={key} handleSelectPokemon={handleSelectPokemon} pokemon={collection[key]} />;
      })
    : null;

const Library = ({ searched, selectedType, listState, loadedDataLength, setLoadedDataLength }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { selectedPokemons, pokemons, isLoading } = useSelector((state) => state.rootReducer.pokemonReducer);
  const { columnNum, isDarkTheme } = useSelector((state) => state.rootReducer.settingsReducer);
  const listlength = loadedDataLength + INITIALPOKEMONPERPAGE;
  useData({ loadTo: listlength, loadFrom: loadedDataLength, searched, selectedType });
  const dispatch = useDispatch();
  const handleHideDetails = () => setIsDetailsVisible(false);
  const handleSelectPokemon = (id) => {
    setSelectedId(id);
    setIsDetailsVisible(true);
  };

  const pokemonListElemements = pokemonList(pokemons, pokemons, handleSelectPokemon);
  const pokemonSelectedElemements = pokemonList(pokemons, selectedPokemons, handleSelectPokemon);

  const errorState = pokemons['error'] + selectedPokemons['error'] ? 'error' : '';

  const isNotSearchedState = listState !== 'searched';
  const backgroundLength = isNotSearchedState ? Math.ceil(listlength / columnNum) : 4;

  if (
    (listState === 'normal' && listlength === pokemonListElemements.length) ||
    (listState === 'filtered' && listlength === pokemonSelectedElemements.length) ||
    searched
  ) {
    dispatch(setIsLoading(false));
  }
  return (
    <LibraryWrapper columnNum={columnNum} isDarkTheme={isDarkTheme}>
      <div className="listWrapper">
        <Background listLength={backgroundLength} isDarkTheme={isDarkTheme} />
        {!isLoading ? (
          (() => {
            switch (listState + errorState) {
              case 'normal':
                return pokemonListElemements;
              case 'searched':
                return pokemonSelectedElemements;
              case 'filtered':
                return pokemonSelectedElemements;
              default:
                return 'Error- check searched value, internet connection or try to reload a site';
            }
          })()
        ) : (
          <LoadingIndicator />
        )}

        {isDetailsVisible ? (
          <Modal hideModal={handleHideDetails}>
            <Suspense fallback={<LoadingIndicator />}>
              <Pokemon id={selectedId} pokemons={listState === 'normal' ? pokemons : selectedPokemons} />
            </Suspense>
          </Modal>
        ) : null}
      </div>
      <Button
        onClick={() => (listState !== 'searched' ? setLoadedDataLength(loadedDataLength + INITIALPOKEMONPERPAGE) : {})}
        children={'LoadMore'}
      />
    </LibraryWrapper>
  );
};

export default Library;
