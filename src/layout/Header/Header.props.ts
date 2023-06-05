import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	SetStateAction
} from 'react';

export interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isOpened: boolean;
	setIsOpened: Dispatch<SetStateAction<boolean>>;
}
