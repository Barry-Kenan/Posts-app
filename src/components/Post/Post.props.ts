import { IPost } from '@/interfaces/post.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	post: IPost;
}
