import React from 'react';
import PostButtons from './PostButtons';
import PostCaption from './PostCaption';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikes from './PostLikes';

const Post = ({username, profilePicURL, imgURL, body, likedBy}) => {
    return (
        <div className='post'>
            <PostHeader picURL={profilePicURL} username={username} />
            <PostImage imgURL={imgURL} />
            <PostButtons />
            <div className="post-caption-items">
                <PostLikes likedBy={likedBy} />
                <PostCaption username={username} body={body} />
            </div>
        </div>
    )
}

export default Post;
