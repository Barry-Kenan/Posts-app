import { profileApi } from '@/helper/api/api';
import { createAction } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';
import { profileActions } from './profile.slice';

export function* getProfileSaga(action: any): any {
	yield put(profileActions.loading());
	const data = yield profileApi.getProfile().then(res => res.data);
	yield put(profileActions.getProfileSuccess(data));
}

export const GET_PROFILE = 'profile/getProfile';
export const getProfile = createAction(GET_PROFILE);
