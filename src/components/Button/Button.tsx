import cn from 'classnames';
import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

const Button: FC<ButtonProps> = ({
	appearance,
	children,
	arrow = 'none',
	className,
	...props
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down'
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};

export default Button;
