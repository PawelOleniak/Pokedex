import pokemonReducer from './pokemonReducer';
import settingsReducer from './settingsReducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({ pokemonReducer, settingsReducer });
