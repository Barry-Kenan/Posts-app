import { IComment } from '@/interfaces/comment.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CommentsState {
	isLoading: boolean;
	comments: IComment[];
}

const initialState: CommentsState = {
	isLoading: false,
	comments: []
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		getCommentsSuccess(state, action: PayloadAction<IComment[]>) {
			state.comments = action.payload;
			state.isLoading = false;
		},
		loading(state) {
			state.isLoading = true;
		}
	}
});

export const commentsActions = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
