import Post from '@/components/Post/Post';
import { FC } from 'react';
import { PostPageProps } from './PostPage.props';

const PostPage: FC<PostPageProps> = ({ posts }) => {
	return <>{posts && posts.map(p => <Post key={p.id} post={p} />)}</>;
};

export default PostPage;
