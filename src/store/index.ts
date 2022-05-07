import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/slices';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(...middlewares)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
