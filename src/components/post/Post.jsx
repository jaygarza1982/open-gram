import React from 'react';
import PostButtons from './PostButtons';
import PostCaption from './PostCaption';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const Post = ({username, profilePicURL, imgURL, body}) => {
    return (
        <div className='post'>
            <PostHeader picURL={profilePicURL} username={username} />
            <PostImage imgURL={imgURL} />
            <PostButtons />
            <PostCaption body={body} />
        </div>
    )
}

export default Post;
