import { IMyProfile } from '@/interfaces/profile.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProfilePageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	profile: IMyProfile | null;
}
