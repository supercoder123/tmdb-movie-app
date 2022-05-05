import { movieSagas } from '@/modules/movies/sagas';
import { all, call } from 'redux-saga/effects';
import { configurationSaga } from './configuration';

export function* rootSaga() {
	yield all([
		call(configurationSaga),
		call(movieSagas)
	]);
}