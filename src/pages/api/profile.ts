import { IMyProfile } from '@/interfaces/profile.interface';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IMyProfile>
) {
	const myProfile: IMyProfile = {
		id: 1,
		name: 'Бары',
		surname: 'Бердыев',
		address: {
			country: 'Россия',
			city: 'Томск'
		},
		phone: '+79996193742',
		email: 'bary.berdiyev.97@mail.ru',
		github: 'https://github.com/Barry-Kenan',
		telegram: 'https://t.me/Barry_Kenan'
	};
	res.status(200).json(myProfile);
}
