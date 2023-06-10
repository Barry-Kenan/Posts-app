import cn from 'classnames';
import { FC } from 'react';
import styles from './Loading.module.scss';
import { LoadingProps } from './Loading.props';
import Spinner from './spinner.svg';

const Loading: FC<LoadingProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.loading)} {...props}>
			<Spinner />
		</div>
	);
};

export default Loading;
