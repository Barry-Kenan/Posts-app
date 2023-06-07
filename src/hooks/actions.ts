import { postsActions } from '@/store/posts/posts.slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getComments } from './../store/comments/comments.saga';
import { getPosts } from './../store/posts/posts.saga';
import { getProfile } from './../store/profile/profile.saga';
const actions = {
	...postsActions,
	getPosts,
	getProfile,
	getComments
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
