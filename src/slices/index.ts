import { Configuration, MoviesState } from '@/types';
import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { movieReducer } from '@/modules/movies';
import { configurationReducer } from './configuration';

export type RootState = {
    configuration: Configuration,
    movies: MoviesState,
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
	configuration: configurationReducer,
	movies: movieReducer
});
export default rootReducer;