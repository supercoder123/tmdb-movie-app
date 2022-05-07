import { combineReducers } from '@reduxjs/toolkit';
import { movieReducer } from '@/modules/movies';
import { configurationReducer } from './configuration';

const rootReducer = combineReducers({
	configuration: configurationReducer,
	movies: movieReducer
});
export default rootReducer;
