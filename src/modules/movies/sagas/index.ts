import { BASE_URL, API_KEY } from '@/config';
import { Movie } from '@/types';
import { all, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import {
	getNowPlayingMovies,
	getNowPlayingMoviesSuccess,
	getNowPlayingNextPage,
} from '../slices/movies';

const queryParams = {
	api_key: API_KEY,
	language: 'en',
	page: 1,
};

async function requestNotPlayingMovies(page: number) {
	const response = await fetch(
		`${BASE_URL}/movie/now_playing?` +
      new URLSearchParams({ ...queryParams, page: page.toString() })
	);
	const data = await response.json();
	return data.results;
}

function* fetchNowPlayingMovies() {
	try {
		const currentPage: number = yield select(
			(state) => state.movies.nowPlaying.page
		);
		const data: Movie[] = yield requestNotPlayingMovies(currentPage);
		yield put(getNowPlayingMoviesSuccess(data));
		yield put(getNowPlayingNextPage());
	} catch (error) {
		console.log(error);
	}
}

export function* movieSagas() {
	yield all([
		takeLatest(getNowPlayingMovies.type, fetchNowPlayingMovies),
		takeEvery(getNowPlayingNextPage.type, getNowPlayingNextPage),
	]);
}
