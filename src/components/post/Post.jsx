import React from 'react';
import PostButtons from './PostButtons';
import PostCaption from './PostCaption';
import PostComments from './PostComments';
import PostDate from './PostDate';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikes from './PostLikes';

const Post = ({username, profilePicURL, imgURL, body, likedBy, comments, date}) => {
    return (
        <div className='post'>
            <PostHeader picURL={profilePicURL} username={username} />
            <PostImage imgURL={imgURL} />
            <PostButtons likedBy={likedBy} />
            <div className='post-caption-items'>
                <PostLikes likedBy={likedBy} />
                <PostCaption username={username} body={body} />
                <PostComments comments={comments} />
                <PostDate date={date} />
            </div>
        </div>
    )
}

export default Post;
