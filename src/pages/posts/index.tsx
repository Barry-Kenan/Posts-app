import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { SortType } from '@/interfaces/sort.type';
import { withLayout } from '@/layout/Layout';
import { PostPage } from '@/page-components';
import { FC, useEffect, useState } from 'react';

const Posts: FC = () => {
	const { getComments } = useActions();
	const [sort, setSort] = useState<SortType>('asc');
	const [page, setPage] = useState<number>(1);
	const [search, setSearch] = useState<string>('');

	const { getPosts } = useActions();
	const { posts, isLoading, pagesCount } = useAppSelector(state => state.posts);

	useEffect(() => {
		if (search != '') {
			setPage(1);
			getPosts({ limit: 5, page, sort, search });
		} else {
			getPosts({ limit: 5, page, sort });
		}
	}, [sort, page, search]);

	useEffect(() => {
		getComments();
	}, []);

	return (
		<PostPage
			sort={sort}
			setSort={setSort}
			setSearchTitle={setSearch}
			posts={posts}
			isLoading={isLoading}
			page={page}
			setPage={setPage}
			pagesCount={pagesCount}
		/>
	);
};

export default withLayout(Posts);
