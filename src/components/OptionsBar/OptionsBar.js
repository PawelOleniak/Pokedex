import React, { useState } from 'react';
import { BarWrapper } from './OptionsBarCss';
import { GoSearch } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedPokemons } from 'reducers/pokemonReducer';
import { capitalizeFirstLetter } from 'helpers';
import { BsList, BsFillGridFill, BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { changeListMode, changeTheme } from 'reducers/settingsReducer';
import Select from 'react-select';
const OptionsBar = ({ searched, setSearched, setSelectedType, setListState }) => {
  const [tempSearchValue, setTempSearchValue] = useState(null);
  const pokemonTypes = useSelector((state) => state.rootReducer.pokemonReducer.pokemonTypes);
  const { columnNum, isDarkTheme } = useSelector((state) => state.rootReducer.settingsReducer);
  const dispatch = useDispatch();

  const handleChangeListMode = () => dispatch(changeListMode());
  const handleChangeTheme = () => dispatch(changeTheme());
  const handleStopSearching = () => {
    setSearched(null);
    setListState('normal');
    dispatch(clearSelectedPokemons());
  };

  const handleStartSearching = () => {
    if (tempSearchValue) {
      setSearched(tempSearchValue.toLowerCase());
      setListState('searched');
    }
  };

  const SearchIcon = searched ? AiOutlineClose : GoSearch;
  const ListModeIcon = columnNum === 1 ? BsList : BsFillGridFill;
  const ThemeModeIcon = isDarkTheme ? BsFillMoonFill : BsFillSunFill;

  const options = pokemonTypes.map(({ name }) => {
    return { value: name, label: capitalizeFirstLetter(name) };
  });
  options.unshift({ value: null, label: 'None' });

  return (
    <BarWrapper isDarkTheme={isDarkTheme}>
      <div className="description">
        <input
          className="searchBar"
          placeholder="Search Pokemon"
          onChange={(e) => setTempSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleStartSearching();
          }}
        />
        <SearchIcon className="icon" onClick={searched ? handleStopSearching : handleStartSearching} />
      </div>

      <div className="description">
        {'Filter by Type:'}
        <Select
          options={options}
          onChange={({ value }) => {
            dispatch(clearSelectedPokemons());
            setSearched(null);
            setListState(value ? 'filtered' : 'normal');

            setSelectedType(value);
          }}
          defaultValue={options[0]}
        />
        <ListModeIcon className="icon" onClick={handleChangeListMode} size={22} />
        <ThemeModeIcon className="icon" onClick={handleChangeTheme} size={22} />
      </div>
    </BarWrapper>
  );
};

export default OptionsBar;
