import type { NextApiRequest, NextApiResponse } from 'next';

export interface IMyProfile {
	id: number;
	name: string;
	surname: string;
	address: Address;
	phone: string;
	email: string;
	github: string;
	telegram: string;
}

interface Address {
	country: string;
	city: string;
}

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
