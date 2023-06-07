import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { withLayout } from '@/layout/Layout';
import { PostPage } from '@/page-components';
import { FC, useEffect } from 'react';

const Posts: FC = () => {
	const { getPosts, getComments } = useActions();
	const { posts, isLoading } = useAppSelector(state => state.posts);

	useEffect(() => {
		getPosts('5', '1');
		getComments();
	}, []);

	if (isLoading) {
		return <>Загрузка...</>;
	}
	return <PostPage posts={posts} />;
};

export default withLayout(Posts);
