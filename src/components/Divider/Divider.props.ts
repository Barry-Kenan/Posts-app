import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface DividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
	type?: 'horizontal' | 'vertical';
}
