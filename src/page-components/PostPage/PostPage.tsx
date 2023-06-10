import { PaginationPosts, PostList, Search, SortPosts } from '@/components';
import { FC } from 'react';
import styles from './PostPage.module.scss';
import { PostPageProps } from './PostPage.props';

const PostPage: FC<PostPageProps> = props => {
	const {
		isLoading,
		page,
		pagesCount,
		posts,
		setPage,
		setSearchTitle,
		setSort,
		sort
	} = props;
	return (
		<div className={styles.wrapper}>
			<div className={styles.searchSort}>
				<Search className={styles.search} setSearchTitle={setSearchTitle} />
				<SortPosts sort={sort} setSort={setSort} className={styles.sort} />
			</div>
			<PostList
				posts={posts}
				isLoading={isLoading}
				className={styles.postList}
			/>
			{posts.length != 0 && (
				<PaginationPosts
					className={styles.pagination}
					page={page}
					pagesCount={pagesCount}
					setPage={setPage}
				/>
			)}
		</div>
	);
};

export default PostPage;
