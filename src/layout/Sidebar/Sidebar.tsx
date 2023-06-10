import { ProfileInfo } from '@/components';
import { useAppSelector } from '@/hooks/redux';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import PostIcon from './post.svg';
import UserIcon from './user.svg';

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
	const router = useRouter();
	const { profile } = useAppSelector(state => state.profile);

	return (
		<div className={cn(className, styles.sidebar)} {...props}>
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
		</div>
	);
};

export default Sidebar;
