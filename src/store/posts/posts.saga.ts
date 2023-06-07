import { postsApi } from '@/helper/api/api';
import { createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { postsActions } from './posts.slice';

export function* getPostsSaga(action: any): any {
	yield put(postsActions.loading());
	const { posts, totalCount } = yield postsApi
		.getPosts(action.payload.limit, action.payload.page, action.payload.userId)
		.then(res => res.data);
	yield put(postsActions.getPostsSuccess(posts));
	yield put(postsActions.setTotalCount(totalCount));
}

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(
	GET_POSTS,
	function prepare(limit: string, page: string, userId?: string) {
		return {
			payload: {
				limit,
				page,
				userId
			}
		};
	}
);
