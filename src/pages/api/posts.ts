import { IPost } from '@/interfaces/post.interface';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { limit, page }
	} = req;

	try {
		const { data } = await axios.get<IPost[]>(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const totalCount = data.length;
		const from = (Number(page) - 1) * Number(limit);
		const to = from + Number(limit);
		const posts = data.slice(from, to);
		return res.status(200).json({ posts, totalCount });
	} catch (error) {
		res.json(error);
	}
}
