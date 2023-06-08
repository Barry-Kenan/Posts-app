import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from './close.svg';
import menu from './menu.svg';
import sortDown from './sort-down.svg';
import sortUp from './sort-up.svg';

export const icons = {
	close,
	menu,
	sortDown,
	sortUp
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: IconName;
	appearance: 'primary' | 'ghost';
}
