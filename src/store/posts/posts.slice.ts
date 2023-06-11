import { IPost } from '@/interfaces/post.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PostsState {
	isLoading: boolean;
	posts: IPost[];
	totalCount: number;
	pagesCount: number;
}

const initialState: PostsState = {
	isLoading: false,
	posts: [],
	totalCount: 0,
	pagesCount: 0
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPostsSuccess(state, action: PayloadAction<IPost[]>) {
			state.posts = action.payload;
			state.isLoading = false;
		},
		loading(state) {
			state.isLoading = true;
		},
		setTotalCount(state, action: PayloadAction<number>) {
			state.totalCount = action.payload;
		},
		setPagesCount(state, action: PayloadAction<number>) {
			state.pagesCount = action.payload;
		}
	}
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
