import React from 'react';

const ProfilePosts = ({ postURLs }) => {
    return (
        <div className='profile-posts'>
            {
                postURLs?.map(url => (
                    <div className="profile-post">
                        <img src={url} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProfilePosts;
