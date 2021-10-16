import React from 'react';

const PostImage = ({imgURL}) => {
    return (
        <img className='post-image' src={imgURL} />
    )
}

export default PostImage;