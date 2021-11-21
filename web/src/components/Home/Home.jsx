import React from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms';
import useFetch from '../Hooks/useFetch';
import Post from '../Post/Post';

const Home = ({ }) => {
    // Fetch current users posts
    const [user] = useRecoilState(userAtom);
    const [userPosts] = useFetch(`/api/posts/list/${user}`);

    return (
        <div className='posts'>
            {
                userPosts.map(post => {
                    return (
                        <Post
                            key={post?._id}
                            username={user}
                            profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                            imgURL={post?.content || ''}
                            body={post?.caption || ''}
                            // likedBy={['user1', 'user2', 'user3']}
                            // comments={['A comment']}
                            date={new Date(post?.datePosted)}
                        />
                    )
                })
            }
        </div>
    )
}

export default Home;
