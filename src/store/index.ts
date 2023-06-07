import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { getComments, getCommentsSaga } from './comments/comments.saga';
import { commentsReducer } from './comments/comments.slice';
import { getPosts, getPostsSaga } from './posts/posts.saga';
import { postsReducer } from './posts/posts.slice';
import { getProfile, getProfileSaga } from './profile/profile.saga';
import { profileReducer } from './profile/profile.slice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
	yield takeEvery(getPosts, getPostsSaga);
	yield takeEvery(getComments, getCommentsSaga);
	yield takeEvery(getProfile, getProfileSaga);
}

export const store = configureStore({
	devTools: true,
	reducer: {
		posts: postsReducer,
		profile: profileReducer,
		comments: commentsReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
