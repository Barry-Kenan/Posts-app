import cn from 'classnames';
import { FC } from 'react';
import { Pagination } from 'react-bootstrap';
import styles from './PaginationPosts.module.scss';
import { PaginationPostsProps } from './PaginationPosts.props';

const PaginationPosts: FC<PaginationPostsProps> = ({
	page,
	pagesCount,
	setPage,
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.pagination)} {...props}>
			<Pagination>
				<Pagination.Prev
					disabled={page == 1}
					onClick={() => setPage(page - 1)}
				/>

				{page != 1 && (
					<Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
				)}
				{page > 2 && <Pagination.Ellipsis />}
				<Pagination.Item active>{page}</Pagination.Item>
				{page < pagesCount - 1 && <Pagination.Ellipsis />}
				{page != pagesCount && pagesCount != 0 && (
					<Pagination.Item onClick={() => setPage(pagesCount)}>
						{pagesCount}
					</Pagination.Item>
				)}
				<Pagination.Next
					onClick={() => setPage(page + 1)}
					disabled={page == pagesCount || pagesCount == 0}
				/>
			</Pagination>
		</div>
	);
};

export default PaginationPosts;
