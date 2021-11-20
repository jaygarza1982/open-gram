import React from 'react';
import Post from '../Post/Post';

const Home = ({ }) => {
    // TODO: Fetch posts from current user and display here
    return (
        <div className='posts'>
            <Post
                username={'Johnny.5'}
                profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                body={'Test text in body!!'}
                likedBy={['user1', 'user2', 'user3']}
                comments={['A comment']}
                date={new Date()}
            />
            <Post
                username={'Johnny.5'}
                profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                body={'Second post'}
                likedBy={[]}
                comments={[]}
            />
        </div>
    )
}

export default Home;
