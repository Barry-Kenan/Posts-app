import { FC } from 'react';
import Divider from '../Divider/Divider';
import styles from './Review.module.scss';
import { ReviewProps } from './Review.props';

const Review: FC<ReviewProps> = ({ comment }) => {
	return (
		<div className={styles.review}>
			<span className={styles.email}>{comment.email}</span>
			<span className={styles.body}>{comment.body}</span>
			<Divider />
		</div>
	);
};

export default Review;
