import React from 'react';
import ProfileStatistic from './ProfileStatistic';

const ProfileInfo = ({ picURL, posts, followers, following, name }) => {
    return (
        <div className='profile-info'>
            <div className="profile-heading">
                <img className="profile-pic" src={picURL} />
            </div>

            <ProfileStatistic value={posts} title={'Posts'} />
            <ProfileStatistic value={followers} title={'Followers'} />
            <ProfileStatistic value={following} title={'Following'} />

            <div className="profile-heading">
                <strong>{name}</strong>
            </div>
        </div>
    )
}

export default ProfileInfo;
