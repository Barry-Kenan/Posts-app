import cn from 'classnames';
import { KeyboardEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';

const Search = ({
	className,
	setSearchTitle,
	...props
}: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const goToSearch = () => {
		setSearchTitle(search);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code == 'Enter') {
			e.preventDefault();
			goToSearch();
		}
	};
	return (
		<form className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
				type='button'
				aria-label='Искать пост'
			>
				<GlassIcon />
			</Button>
		</form>
	);
};

export default Search;
