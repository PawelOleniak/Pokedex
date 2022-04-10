import React, { useState } from 'react';
import { OptionsBar } from 'components';
import { Library } from 'pages';

function App() {
  const [searched, setSearched] = useState();
  const [selectedType, setSelectedType] = useState(null);
  const [listState, setListState] = useState('normal');
  const [loadedDataLength, setLoadedDataLength] = useState(0);
  if (loadedDataLength > 1180) alert('Hold on! The pokemons are running out!');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
      <OptionsBar
        searched={searched}
        setSearched={setSearched}
        setSelectedType={setSelectedType}
        setListState={setListState}
      ></OptionsBar>
      <Library
        searched={searched}
        selectedType={selectedType}
        listState={listState}
        setLoadedDataLength={setLoadedDataLength}
        loadedDataLength={loadedDataLength}
      />
    </div>
  );
}

export default App;
