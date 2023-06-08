import { IPost } from '@/interfaces/post.interface';
import { SortType } from '@/interfaces/sort.type';

export interface PostPageProps {
	sort: SortType;
	setSort: (sort: SortType) => void;
	setSearchTitle: (searchTitle: string) => void;
	posts: IPost[];
	isLoading: boolean;
	page: number;
	setPage: (page: number) => void;
	pagesCount: number;
}
