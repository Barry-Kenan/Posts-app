import cn from 'classnames';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<span>Barry_Kenan</span>
		</footer>
	);
};

export default Footer;
