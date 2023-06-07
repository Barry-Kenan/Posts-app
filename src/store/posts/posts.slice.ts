import { IPost } from '@/interfaces/post.interface';
import { createSlice } from '@reduxjs/toolkit';

interface PostsState {
	isLoading: boolean;
	posts: IPost[];
	totalCount: number;
}

const initialState: PostsState = {
	isLoading: false,
	posts: [],
	totalCount: 0
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPostsSuccess(state, action) {
			state.posts = action.payload;
			state.isLoading = false;
		},
		loading(state) {
			state.isLoading = true;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		}
	}
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
