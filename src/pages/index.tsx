import { profileApi } from '@/helper/api/api';
import { useActions } from '@/hooks/actions';
import { IMyProfile } from '@/interfaces/profile.interface';
import { withLayout } from '@/layout/Layout';
import { ProfilePage } from '@/page-components';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import { FC } from 'react';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

const Home: FC<HomeProps> = ({ profile }) => {
	const { getProfileSuccess } = useActions();
	if (typeof window !== 'undefined') {
		getProfileSuccess(profile);
	}
	return (
		<>
			<ProfilePage profile={profile} className={inter.className} />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const { data: profile } = await profileApi.getProfile();
	return {
		props: {
			profile
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	profile: IMyProfile;
}
