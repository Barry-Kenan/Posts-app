import cn from 'classnames';
import { FunctionComponent, useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.opened]: isOpened
			})}
		>
			<Header
				className={styles.header}
				isOpened={isOpened}
				setIsOpened={setIsOpened}
			/>
			<Sidebar className={cn(styles.sidebar)} />
			<main className={cn(styles.body)}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
