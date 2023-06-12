import { jsonApi } from '@/helper/api/api';
import { IPost } from '@/interfaces/post.interface';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { limit, page, sort, search, userId }
	} = req;

	const returnPosts = (data: IPost[]) => {
		if (search) {
			const re = new RegExp(search as string, 'i');
			data = data.filter(e => e.title.search(re) !== -1);
			const totalCount = data.length;
			return res.status(200).json({ posts: data, totalCount, pagesCount: 1 });
		}

		const totalCount = data.length;
		const pagesCount = Math.ceil(totalCount / Number(limit));
		const from = (Number(page) - 1) * Number(limit);
		const to = from + Number(limit);

		let allPosts = [];
		if (sort == 'asc') {
			allPosts = data.sort((a, b) => a.id - b.id);
		} else {
			allPosts = data.sort((a, b) => b.id - a.id);
		}
		const posts = allPosts.slice(from, to);
		return res.status(200).json({ posts, totalCount, pagesCount });
	};

	try {
		if (userId) {
			const { data } = await jsonApi.getPosts(userId as string);
			returnPosts(data);
		} else {
			const { data } = await jsonApi.getPosts();
			returnPosts(data);
		}
	} catch (error) {
		res.json(error);
	}
}
