import { useActions } from '@/hooks/actions';
import { useAppSelector } from '@/hooks/redux';
import { IPost } from '@/interfaces/post.interface';
import { withLayout } from '@/layout/Layout';
import { ProfilePage } from '@/page-components';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import { FC, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Home: FC<HomeProps> = () => {
	const { getProfile } = useActions();
	const { profile, isLoading } = useAppSelector(state => state.profile);

	useEffect(() => {
		getProfile();
	}, []);
	return (
		<>
			<ProfilePage />
			{profile?.name}
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const { data: posts } = await axios.get<IPost[]>(
		'https://jsonplaceholder.typicode.com/posts'
	);
	return {
		props: {
			posts
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	posts: IPost[];
}
