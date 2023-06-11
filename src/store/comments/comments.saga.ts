import { jsonApi } from '@/helper/api/api';
import { IComment } from '@/interfaces/comment.interface';
import { createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { commentsActions } from './comments.slice';

export function* getCommentsSaga() {
	yield put(commentsActions.loading());
	const data: IComment[] = yield jsonApi.getComments();
	yield put(commentsActions.getCommentsSuccess(data));
}

export const GET_COMMENTS = 'comments/getComments';
export const getComments = createAction(GET_COMMENTS);
