import { postsApi } from '@/helper/api/api';
import { createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { postsActions } from './posts.slice';

export function* getPostsSaga(action: any): any {
	yield put(postsActions.loading());
	const { posts, totalCount, pagesCount } = yield postsApi
		.getPosts(
			action.payload.limit,
			action.payload.page,
			action.payload.sort,
			action.payload.search,
			action.payload.userId
		)
		.then(res => res.data);
	yield put(postsActions.getPostsSuccess(posts));
	yield put(postsActions.setTotalCount(totalCount));
	yield put(postsActions.setPagesCount(pagesCount));
}

export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(
	GET_POSTS,
	function prepare(
		limit: number,
		page: number,
		sort: 'asc' | 'desc' = 'asc',
		search?: string,
		userId?: string
	) {
		return {
			payload: {
				limit,
				page,
				sort,
				search,
				userId
			}
		};
	}
);
