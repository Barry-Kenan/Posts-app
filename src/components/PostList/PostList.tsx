import { Loading, Post } from '@/components';
import cn from 'classnames';
import { FC } from 'react';
import styles from './PostList.module.scss';
import { PostListProps } from './PostList.props';

const PostList: FC<PostListProps> = ({
	posts,
	isLoading,
	className,
	...props
}) => {
	if (isLoading) {
		return <Loading />;
	}

	if (posts.length == 0) {
		return <div>Ничего не нашли</div>;
	}

	return (
		<div className={cn(styles.posts, className)} {...props}>
			{posts.length && posts.map(p => <Post key={p.id} post={p} />)}
		</div>
	);
};

export default PostList;
