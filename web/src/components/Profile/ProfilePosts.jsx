import React from 'react';

const ProfilePosts = ({ postURLs, postKeys }) => {
    return (
        <div className='profile-posts'>
            {
                postURLs?.map((url, index) => (
                    <div key={postKeys[index]} className="profile-post">
                        <img src={url} />
                    </div>
                ))
            }
        </div>
    )
}

export default ProfilePosts;
