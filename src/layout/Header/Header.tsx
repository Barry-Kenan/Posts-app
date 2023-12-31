import { ButtonIcon } from '@/components';
import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logo from './logo.png';

const Header: FC<HeaderProps> = ({ className, ...props }) => {
	const { isOpened } = useAppSelector(state => state.sidebar);
	const { setIsOpened } = useActions();
	const handleButton = () => {
		setIsOpened(!isOpened);
	};
	return (
		<header className={cn(className, styles.header)} {...props}>
			<Image src={Logo} height={50} alt='logo' priority={true} />
			{isOpened ? (
				<ButtonIcon appearance='ghost' icon='close' onClick={handleButton} />
			) : (
				<ButtonIcon appearance='ghost' icon='menu' onClick={handleButton} />
			)}
		</header>
	);
};

export default Header;
