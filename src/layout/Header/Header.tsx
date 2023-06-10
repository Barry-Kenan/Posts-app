import { ButtonIcon } from '@/components';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logo from './logo.png';

const Header: FC<HeaderProps> = ({
	className,
	isOpened,
	setIsOpened,
	...props
}) => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<Image src={Logo} height={50} alt='logo' priority={true} />
			{isOpened ? (
				<ButtonIcon
					appearance='ghost'
					icon='close'
					onClick={() => setIsOpened(!isOpened)}
				/>
			) : (
				<ButtonIcon
					appearance='ghost'
					icon='menu'
					onClick={() => setIsOpened(!isOpened)}
				/>
			)}
		</header>
	);
};

export default Header;
