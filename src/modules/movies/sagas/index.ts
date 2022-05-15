import { BASE_URL, API_KEY } from '@/config';
import { Movie } from '@/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import {
	getMovies,
	getMoviesSuccess,
	getNextPage,
	MovieKey
} from '../slices/movies';

const queryParams = {
	api_key: API_KEY,
	language: 'en',
	page: 1
};

async function requestNotPlayingMovies(url: string, page: number) {
	const response = await fetch(
		url + new URLSearchParams({ ...queryParams, page: page.toString() })
	);
	const data = await response.json();
	return data.results;
}

function* fetchMovies({ payload }: PayloadAction<MovieKey>) {
	try {
		const currentPage: number = yield select(
			(state) => state.movies.now_playing.page
		);
		const data: Movie[] = yield requestNotPlayingMovies(
			`${BASE_URL}/movie/${payload}?`,
			currentPage
		);
		yield put(getMoviesSuccess({ movieKey: payload, movies: data }));
		yield put(getNextPage());
	} catch (error) {
		console.log(error);
	}
}

export function* movieSagas() {
	yield all([
		takeLatest(getMovies.type, fetchMovies),
		takeEvery(getNextPage.type, getNextPage)
	]);
}
