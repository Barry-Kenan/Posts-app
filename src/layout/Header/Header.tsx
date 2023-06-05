import { ButtonIcon } from '@/components';
import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({
	className,
	isOpened,
	setIsOpened,
	...props
}) => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<span>Logo</span>
			{!isOpened ? (
				<ButtonIcon
					appearance='ghost'
					icon='menu'
					onClick={() => setIsOpened(!isOpened)}
				/>
			) : (
				<ButtonIcon
					appearance='ghost'
					icon='close'
					onClick={() => setIsOpened(!isOpened)}
				/>
			)}
		</header>
	);
};

export default Header;
