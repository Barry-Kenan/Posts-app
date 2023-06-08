import { Post } from '@/components';
import { FC } from 'react';
import styles from './PostList.module.scss';
import { PostListProps } from './PostList.props';

const PostList: FC<PostListProps> = ({ posts, isLoading }) => {
	if (isLoading) {
		return <>Загрузка...</>;
	}

	if (posts.length == 0) {
		return <>Ничего не нашли</>;
	}

	return (
		<>
			<div className={styles.posts}>
				{posts.length && posts.map(p => <Post key={p.id} post={p} />)}
			</div>
		</>
	);
};

export default PostList;
