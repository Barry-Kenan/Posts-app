import { SortType } from './sort.type';

export interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface GetPostsReq {
	limit: number;
	page: number;
	sort: SortType;
	search?: string;
	userId?: string;
}

export interface GetPostsRes {
	posts: IPost[];
	totalCount: number;
	pagesCount: number;
}
