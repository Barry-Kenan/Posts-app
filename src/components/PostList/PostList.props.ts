import { IPost } from '@/interfaces/post.interface';

export interface PostListProps {
	posts: IPost[];
	isLoading: boolean;
}
