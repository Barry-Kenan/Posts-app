import cn from 'classnames';
import { ForwardedRef, forwardRef, memo } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

const Card = memo(
	forwardRef(
		(
			{ color = 'white', children, className, ...props }: CardProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			return (
				<div
					className={cn(styles.card, className, {
						[styles.blue]: color == 'blue'
					})}
					ref={ref}
					{...props}
				>
					{children}
				</div>
			);
		}
	)
);

export default Card;
