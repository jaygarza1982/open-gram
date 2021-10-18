import { AddComment, Favorite, Share } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { React, useState } from 'react'

const PostButtons = ({likedBy}) => {

    const [currentUser] = useState('user1');

    return (
        <div className="post-buttons">
            <IconButton>
                <Favorite className={likedBy?.includes(currentUser) ? 'post-liked' : ''} />
            </IconButton>
            <IconButton>
                <AddComment />
            </IconButton>
            <IconButton>
                <Share />
            </IconButton>
        </div>
    )
}

export default PostButtons;