import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';

const Profile = ({ }) => {

    const postURLs = [
        'https://source.unsplash.com/random/400x600',
        'https://source.unsplash.com/random/600x400',
        'https://source.unsplash.com/random/800x800',
        'https://source.unsplash.com/random/900x900',
        'https://source.unsplash.com/random/950x900',
        'https://source.unsplash.com/random/950x950',
        'https://source.unsplash.com/random/550x900',
        'https://source.unsplash.com/random/950x500',
        'https://source.unsplash.com/random/950x600',
        'https://source.unsplash.com/random/950x700',
        'https://source.unsplash.com/random/950x800',
    ];

    return (
        <div className='profile'>
            <ProfileInfo
                picURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                posts={13}
                followers={5843}
                following={735}
                name='Johnny'
            />

            <ProfilePosts postURLs={postURLs} />
        </div>
    )
}

export default Profile;
