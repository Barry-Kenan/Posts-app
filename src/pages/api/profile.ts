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
		jobTitle: 'Frontend-разработчик',
		github: 'https://github.com/Barry-Kenan',
		hh: 'https://tomsk.hh.ru/applicant/resumes/view?resume=e657467dff0af39ddd0039ed1f36374644665a',
		telegram: 'https://t.me/Barry_Kenan',
		skills: [
			'HTML5',
			'CSS',
			'БЭМ',
			'JavaScript',
			'TypeScript',
			'Git',
			'React',
			'Redux',
			'Axios',
			'Angular',
			'RxJS',
			'Ant Design',
			'Next.js',
			'Redux Toolkit',
			'Redux-Thunk',
			'Redux-Saga',
			'RTKQuery',
			'Tailwind'
		],
		image:
			'https://drive.google.com/uc?export=view&id=13Eyy4eqhKqWmly94V8UwwAHZAXWiHUOE'
	};
	res.status(200).json(myProfile);
}
