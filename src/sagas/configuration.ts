import { BASE_URL, API_KEY } from '@/config';
import { getConfiguration, getConfigurationSuccess } from '@/slices/configuration';
import { Configuration } from '@/types';
import { all, put, takeLatest } from 'redux-saga/effects';

const queryParams = {
	api_key: API_KEY,
};

async function requestConfiguration() {
	const response = await fetch(
		`${BASE_URL}/configuration?` +
      new URLSearchParams(queryParams)
	);
	const data = await response.json();
	return data.images;
}

function* fetchConfiguration() {
	try {
		const data: Configuration['images'] = yield requestConfiguration();
		yield put(getConfigurationSuccess(data));
	} catch (error) {
		console.log(error);
	}
}

export function* configurationSaga() {
	yield all([
		takeLatest(getConfiguration.type, fetchConfiguration),
	]);
}
