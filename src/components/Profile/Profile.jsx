import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileStatistic from './ProfileStatistic';

const Profile = ({ }) => {
    return (
        <div className='profile'>
            <ProfileInfo
                picURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                posts={13}
                followers={5843}
                following={735}
                name='Johnny'
            />

            <div className='profile-posts'>

            </div>
        </div>
    )
}

export default Profile;
