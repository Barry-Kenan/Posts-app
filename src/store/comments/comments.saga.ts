import { jsonApi } from '@/helper/api/api';
import { createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { commentsActions } from './comments.slice';

export function* getCommentsSaga(): any {
	yield put(commentsActions.loading());
	const { data } = yield jsonApi.getComments();
	yield put(commentsActions.getCommentsSuccess(data));
}

export const GET_COMMENTS = 'comments/getComments';
export const getComments = createAction(GET_COMMENTS);
