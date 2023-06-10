import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Tag.module.scss';
import { TagProps } from './Tag.props';

const Tag: FC<TagProps> = ({
	children,
	size = 's',
	color = 'ghost',
	href,
	className,
	...props
}) => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.gray]: color == 'black',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.primary]: color == 'primary'
			})}
			{...props}
		>
			{href ? (
				<Link href={href} target='_blank'>
					{children}
				</Link>
			) : (
				<>{children}</>
			)}
		</div>
	);
};

export default Tag;
