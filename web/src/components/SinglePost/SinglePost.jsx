import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../Hooks/useFetch';
import Post from '../Post/Post';

const SinglePost = () => {

    const { postId } = useParams();

    const [post] = useFetch(`/api/posts/find/${postId}`, true);

    return (
        <div className="post">
            <Post
                username={post?.username}
                profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                imgURL={post?.content || ''}
                body={post?.caption || ''}
                // likedBy={['user1', 'user2', 'user3']}
                // comments={['A comment']}
                date={new Date(post?.datePosted)}
            />
        </div>
    );
}

export default SinglePost;
