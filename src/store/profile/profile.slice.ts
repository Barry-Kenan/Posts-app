import { IMyProfile } from '@/interfaces/profile.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProfileState {
	isLoading: boolean;
	profile: IMyProfile | null;
}

const initialState: ProfileState = {
	isLoading: false,
	profile: null
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		getProfileSuccess(state, action: PayloadAction<IMyProfile>) {
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
