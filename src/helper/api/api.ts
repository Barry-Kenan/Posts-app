import { IComment } from '@/interfaces/comment.interface';
import { IPost } from '@/interfaces/post.interface';
import { IUser } from '@/interfaces/users.interface';
import axios from 'axios';

export const instanceApi = axios.create({
	baseURL: 'http://localhost:3000/api'
});

export const instanceJsonApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
});

export const postsApi = {
	getPosts(
		limit = 10,
		page = 1,
		sort: 'asc' | 'desc' = 'asc',
		search?: string,
		userId?: string
	) {
		return instanceApi.get('/posts', {
			params: {
				limit,
				page,
				sort,
				search,
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

export const jsonApi = {
	getComments() {
		return instanceJsonApi.get<IComment[]>('/comments');
	},
	getUsers() {
		return instanceJsonApi.get<IUser[]>('/users');
	},
	getPosts(userId?: string) {
		return instanceJsonApi.get<IPost[]>('/posts', {
			params: {
				userId
			}
		});
	}
};
