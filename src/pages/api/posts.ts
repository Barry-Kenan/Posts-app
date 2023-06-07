import { IPost } from '@/interfaces/post.interface';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { limit, page, userId }
	} = req;

	const returnPosts = (data: IPost[]) => {
		const totalCount = data.length;
		const from = (Number(page) - 1) * Number(limit);
		const to = from + Number(limit);
		const posts = data.slice(from, to);
		return res.status(200).json({ posts, totalCount });
	};

	try {
		if (userId) {
			const { data } = await axios.get<IPost[]>(
				`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
			);
			returnPosts(data);
		} else {
			const { data } = await axios.get<IPost[]>(
				'https://jsonplaceholder.typicode.com/posts'
			);
			returnPosts(data);
		}
	} catch (error) {
		res.json(error);
	}
}
