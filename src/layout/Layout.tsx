import { store } from '@/store';
import cn from 'classnames';
import { FunctionComponent, useState } from 'react';
import { Provider } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import Sidebar from './Sidebar/Sidebar';

/**
 *  Для исправление ошибки
 *  Warning Prop `className` did not match
 */
// const Sidebar = dynamic(() => import('./Sidebar/Sidebar'), {
// 	ssr: false,
// 	loading: () => <>Загрузка...</>
// });

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(true);
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.closed]: !isOpened
			})}
		>
			<Header
				className={styles.header}
				isOpened={isOpened}
				setIsOpened={setIsOpened}
			/>
			<Sidebar className={cn(styles.sidebar)} isOpened={isOpened} />
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
			<Provider store={store}>
				<Layout>
					<Component {...props} />
				</Layout>
			</Provider>
		);
	};
};
