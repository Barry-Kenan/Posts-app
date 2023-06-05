import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import PostIcon from './post.svg';
import UserIcon from './user.svg';

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href='/' className={styles.item}>
				<UserIcon />
				Обо мне
			</Link>
			<Link href='/posts' className={styles.item}>
				<PostIcon />
				Список постов
			</Link>
		</div>
	);
};

export default Sidebar;
