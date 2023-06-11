import { useAppSelector } from '@/hooks/redux';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Review from '../Review/Review';
import styles from './Post.module.scss';
import { PostProps } from './Post.props';
import avatarImage from './avatar.png';

const Post: FC<PostProps> = ({ post }) => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const { comments } = useAppSelector(state => state.comments);
	const router = useRouter();

	const variants = {
		visible: {
			opacity: 1,
			height: 'auto',
			transition: { type: 'spring', duration: 1 }
		},
		hidden: {
			opacity: 0,
			height: 0
		}
	};

	const filteredComments = comments.filter(c => c.postId == post.id);

	return (
		<div>
			<Card className={styles.post}>
				<Image
					className={styles.image}
					src={avatarImage}
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
			<motion.div
				variants={variants}
				initial='hidden'
				animate={isReviewOpened ? 'visible' : 'hidden'}
			>
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
			</motion.div>
		</div>
	);
};

export default Post;
