import React from 'react'

const PostLikes = ({likedBy}) => {
    return (
        <div className='post-likes'>
            {
                likedBy?.length > 0 ?
                <>Liked by <strong>{likedBy.length} people</strong></>
                :
                <>Be the first like!</>
            }
        </div>
    )
}

export default PostLikes;
