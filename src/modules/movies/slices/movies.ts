import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesState, Movie } from '@/types';

const initialState: MoviesState = {
	now_playing: {
		movies: [],
		page: 1,
		isLoading: false
	},
	popular: {
		movies: [],
		page: 1,
		isLoading: false
	},
	upcoming: {
		movies: [],
		page: 1,
		isLoading: false
	}
};

export type MovieKey = 'now_playing' | 'popular' | 'upcoming';

export type MoviePayload = {
	movieKey: MovieKey;
	movies: Array<Movie>;
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		getMovies: (state, { payload }: PayloadAction<MovieKey>) => {
			state[payload].isLoading = true;
		},
		getMoviesSuccess: (
			state,
			{ payload: { movieKey, movies } }: PayloadAction<MoviePayload>
		) => {
			state[movieKey].movies.push(...movies);
			state[movieKey].isLoading = false;
		},
		getMoviesError: (state, { payload }: PayloadAction<MovieKey>) => {
			state[payload].isLoading = false;
		},
		getNextPage: (state) => {
			state.now_playing.page += 1;
		}
	}
});

export const { getMovies, getMoviesSuccess, getMoviesError, getNextPage } =
	movieSlice.actions;

const movieReducer = movieSlice.reducer;
export { movieReducer };
