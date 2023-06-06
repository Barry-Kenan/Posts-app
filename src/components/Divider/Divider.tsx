import cn from 'classnames';
import { FC } from 'react';
import styles from './Divider.module.scss';
import { DividerProps } from './Divider.props';

const Divider: FC<DividerProps> = ({
	type = 'horizontal',
	className,
	...props
}) => {
	return (
		<hr
			className={cn(className, {
				[styles.vertical]: type == 'vertical',
				[styles.horizontal]: type == 'horizontal'
			})}
			{...props}
		/>
	);
};

export default Divider;
