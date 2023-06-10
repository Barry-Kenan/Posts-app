import { IPost } from '@/interfaces/post.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	posts: IPost[];
	isLoading: boolean;
}
