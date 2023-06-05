import { Button, ButtonIcon } from '@/components';
import { FC } from 'react';
import { TopPageProps } from './TopPage.props';

const TopPage: FC<TopPageProps> = ({ posts }) => {
	return (
		<>
			<h1>Hello Next</h1>
			<Button appearance='ghost' arrow='down'>
				Button
			</Button>
			<ButtonIcon appearance='ghost' icon='menu' />
			{posts &&
				posts.map(p => (
					<ul key={p.id}>
						<li>{p.title}</li>
					</ul>
				))}
		</>
	);
};

export default TopPage;
