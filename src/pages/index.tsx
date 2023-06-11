import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { withLayout } from '@/layout/Layout';
import { ProfilePage } from '@/page-components';
import { Inter } from 'next/font/google';
import { FC, useEffect } from 'react';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

const Home: FC = () => {
	const { getProfile } = useActions();
	useEffect(() => {
		getProfile();
	}, []);

	const { profile } = useAppSelector(state => state.profile);

	return (
		<>
			<ProfilePage profile={profile} className={inter.className} />
		</>
	);
};

export default withLayout(Home);
