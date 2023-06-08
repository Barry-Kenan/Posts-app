import { FC } from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { SortPostProps } from './SortPost.props';
import styles from './SortProps.module.scss';

const SortPosts: FC<SortPostProps> = ({ sort, setSort }) => {
	return (
		<div className={styles.sort}>
			{sort == 'asc' ? (
				<ButtonIcon
					appearance='primary'
					icon='sortDown'
					onClick={() => setSort('desc')}
				/>
			) : (
				<ButtonIcon
					appearance='primary'
					icon='sortUp'
					onClick={() => setSort('asc')}
				/>
			)}
		</div>
	);
};

export default SortPosts;
