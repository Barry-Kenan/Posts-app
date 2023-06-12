import { jsonApi } from '@/helper/api/api';
import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { SortType } from '@/interfaces/sort.type';
import { IUser } from '@/interfaces/users.interface';
import { withLayout } from '@/layout/Layout';
import { PostPage } from '@/page-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const Users: FC = () => {
	const { getComments } = useActions();
	const [sort, setSort] = useState<SortType>('asc');
	const [page, setPage] = useState<number>(1);
	const [search, setSearch] = useState<string>('');
	const router = useRouter();
	const { getPosts } = useActions();
	const { posts, isLoading, pagesCount } = useAppSelector(state => state.posts);

	useEffect(() => {
		getComments();
	}, []);

	useEffect(() => {
		if (search != '') {
			setPage(1);
			getPosts({
				limit: 5,
				page,
				sort,
				search,
				userId: router.query.id as string
			});
		} else {
			getPosts({ limit: 5, page, sort, userId: router.query.id as string });
		}
	}, [sort, page, search]);

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

export default withLayout(Users);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	const { data: users } = await jsonApi.getUsers();
	paths = paths.concat(users.flatMap(e => `/posts/${e.id}`));

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<UsersProps> = async () => {
	const { data: users } = await jsonApi.getUsers();
	return {
		props: {
			users
		}
	};
};

interface UsersProps extends Record<string, unknown> {
	users: IUser[];
}
