import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';

const Profile = ({ postURLs, postKeys }) => {

    // TODO: If there are not specified urls or keys, we need to fetch the current user
    return (
        <div className='profile'>
            <ProfileInfo
                picURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                posts={13}
                followers={5843}
                following={735}
                name='Johnny'
            />

            <ProfilePosts postURLs={postURLs} postKeys={postKeys} />
        </div>
    )
}

export default Profile;
