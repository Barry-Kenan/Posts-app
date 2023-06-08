import { SortType } from '@/interfaces/sort.type';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SortPostProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortType;
	setSort: (sort: SortType) => void;
}
