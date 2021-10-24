import React from 'react'

const PostComments = ({comments}) => {
    return (
        <div className='post-comments'>
            {
                comments?.length > 0 ?
                <>View all {comments.length} comments</>
                :
                <>No comments yet</>
            }
        </div>
    )
}

export default PostComments;
