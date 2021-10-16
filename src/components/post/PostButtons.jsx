import { AddComment, Favorite, Share } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'

const PostButtons = () => {
    return (
        <div className="post-buttons">
            <IconButton>
                <Favorite />
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