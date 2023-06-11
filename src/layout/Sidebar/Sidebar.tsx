import { ProfileInfo } from '@/components';
import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { useResize } from '@/hooks/use-resize';
import cn from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import PostIcon from './post.svg';
import UserIcon from './user.svg';

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
	const { isOpened } = useAppSelector(state => state.sidebar);
	const router = useRouter();
	const { profile } = useAppSelector(state => state.profile);
	const { setIsOpened } = useActions();
	const { tablet } = useResize();
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (tablet) {
			setIsOpened(false);
		}
	}, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: shouldReduceMotion ? 1 : 0,
			x: tablet ? '100%' : '-100%'
		}
	};

	return (
		<motion.div
			className={cn(className, styles.sidebar)}
			variants={variants}
			initial={'opened'}
			animate={isOpened ? 'opened' : 'closed'}
		>
			{profile && (
				<ProfileInfo className={styles.profileInfo} profile={profile} />
			)}
			<Link
				href='/'
				className={cn(styles.item, {
					[styles.active]: router.asPath == '/'
				})}
			>
				<UserIcon />
				Обо мне
			</Link>
			<Link
				href='/posts'
				className={cn(styles.item, {
					[styles.active]: router.asPath == '/posts'
				})}
			>
				<PostIcon />
				Список постов
			</Link>
		</motion.div>
	);
};

export default Sidebar;
