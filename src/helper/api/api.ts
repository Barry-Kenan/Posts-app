import { IComment } from '@/interfaces/comment.interface';
import axios from 'axios';

export const instanceApi = axios.create({
	baseURL: '/api'
});

export const instanceJsonApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

export const postsApi = {
	getPosts(limit = '10', page = '1', userId?: string) {
		return instanceApi.get('/posts', {
			params: {
				limit,
				page,
				userId
			}
		});
	}
};

export const profileApi = {
	getProfile() {
		return instanceApi.get(`/profile`);
	}
};

export const commentsApi = {
	getComments() {
		return instanceJsonApi.get<IComment>('/comments');
	}
};
