import cn from 'classnames';
import { FC } from 'react';
import styles from './ButtonIcon.module.scss';
import { ButtonIconProps, icons } from './ButtonIcon.props';

const ButtonIcon: FC<ButtonIconProps> = ({
	appearance,
	icon,
	className,
	...props
}) => {
	const IconComp = icons[icon];
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			<IconComp />
		</button>
	);
};

export default ButtonIcon;
