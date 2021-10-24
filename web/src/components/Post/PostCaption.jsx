import React from 'react';

const PostCaption = ({body, username}) => {
    return (
        <div className="post-caption">
            <div className="post-username">
                {username}
            </div>
            {body}
        </div>
    )
}

export default PostCaption;
