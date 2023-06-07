import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { IUser } from '@/interfaces/users.interface';
import { withLayout } from '@/layout/Layout';
import { PostPage } from '@/page-components';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const Users: FC = () => {
	const router = useRouter();
	const { getPosts } = useActions();
	const { posts, isLoading } = useAppSelector(state => state.posts);
	useEffect(() => {
		getPosts('3', '1', router.query.id as string);
	}, []);
	if (isLoading) {
		return <>Загрузка...</>;
	}
	return <PostPage posts={posts} />;
};

export default withLayout(Users);

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: string[] = [];
	const { data: users } = await axios.get<IUser[]>(
		'https://jsonplaceholder.typicode.com/users'
	);
	paths = paths.concat(users.flatMap(e => `/posts/${e.id}`));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<UsersProps> = async () => {
	const { data: users } = await axios.get<IUser[]>(
		'https://jsonplaceholder.typicode.com/users'
	);
	return {
		props: {
			users
		}
	};
};

interface UsersProps extends Record<string, unknown> {
	users: IUser[];
}
