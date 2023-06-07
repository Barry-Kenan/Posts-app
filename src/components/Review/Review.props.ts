import { IComment } from '@/interfaces/comment.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	comment: IComment;
}
