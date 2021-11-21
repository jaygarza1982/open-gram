import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ProfilePosts = ({ posts }) => {

    const history = useHistory();

    return (
        <div className='profile-posts'>
            {
                posts?.map(post => (
                    <div
                        onClick={() => history.push(`/post/${post._id}`)}
                        key={post?._id}
                        className="profile-post"
                    >
                        <img src={post?.content} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProfilePosts;
