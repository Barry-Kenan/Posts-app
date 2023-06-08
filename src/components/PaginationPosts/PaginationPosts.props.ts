import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PaginationPostsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	page: number;
	setPage: (page: number) => void;
	pagesCount: number;
}
