import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesState, Movie } from '@/types';

const initialState: MoviesState = {
	nowPlaying: {
		movies: [],
		page: 1,
		isLoading: false,
	},
	popular: {
		movies: [],
		page: 1,
		isLoading: false,
	},
	upcoming: {
		movies: [],
		page: 1,
		isLoading: false,
	},
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		getNowPlayingMovies: (state) => {
			state.nowPlaying.isLoading = true;
		},
		getNowPlayingMoviesSuccess: (
			state,
			{ payload }: PayloadAction<Array<Movie>>
		) => {
			console.log(payload);
			state.nowPlaying.movies = [...state.nowPlaying.movies, ...payload];
			state.nowPlaying.isLoading = false;
		},
		getNowPlayingMoviesError: (state) => {
			state.nowPlaying.isLoading = false;
		},
		getNowPlayingNextPage: (state) => {
			state.nowPlaying.page += 1;
		},
	},
});

export const {
	getNowPlayingMovies,
	getNowPlayingMoviesSuccess,
	getNowPlayingMoviesError,
	getNowPlayingNextPage,
} = movieSlice.actions;

const movieReducer = movieSlice.reducer;
export { movieReducer };
