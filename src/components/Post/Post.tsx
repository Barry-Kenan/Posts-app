import { useAppSelector } from '@/hooks/redux';
import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Review from '../Review/Review';
import styles from './Post.module.scss';
import { PostProps } from './Post.props';

const Post: FC<PostProps> = ({ post }) => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const { comments } = useAppSelector(state => state.comments);
	const router = useRouter();

	const filteredComments = comments.filter(c => c.postId == post.id);

	return (
		<div>
			<Card className={styles.post}>
				<Image
					className={styles.image}
					src='data:image/png;base64,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'
					alt='avatar'
					width={50}
					height={50}
					onClick={() => router.push(`/posts/${post.userId}`)}
				/>
				<div className={styles.title}>{post.title}</div>
				<div className={styles.body}>{post.body}</div>
				<Button
					className={styles.button}
					appearance='primary'
					arrow={isReviewOpened ? 'down' : 'right'}
					onClick={() => setIsReviewOpened(!isReviewOpened)}
				>
					Комментарии
				</Button>
			</Card>
			<Card
				color='blue'
				className={cn(styles.reviews, {
					[styles.hidden]: !isReviewOpened
				})}
			>
				{filteredComments.length ? (
					filteredComments.map(c => <Review key={c.id} comment={c} />)
				) : (
					<span>Комментарий нет</span>
				)}
			</Card>
		</div>
	);
};

export default Post;
