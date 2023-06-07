import { IMyProfile } from '@/interfaces/profile.interface';
import { createSlice } from '@reduxjs/toolkit';

interface ProfileState {
	isLoading: boolean;
	profile: IMyProfile | null;
}

const initialState: ProfileState = {
	isLoading: false,
	profile: null
};

export const profileSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPostsSuccess(state, action) {
			state.profile = action.payload;
			state.isLoading = false;
		},
		loading(state) {
			state.isLoading = true;
		}
	}
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
