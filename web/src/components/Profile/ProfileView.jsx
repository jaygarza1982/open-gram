import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../Hooks/useFetch';
import Profile from './Profile';

const ProfileView = ({ }) => {

    const { user } = useParams();
    const userPosts = useFetch(`/api/posts/list/${user}`);

    // TODO: Find out if there should be a dep array or no dep array
    useEffect(() => {
        console.log('User profile page', user);
        console.log('user posts', userPosts);
    });


    const [postURLs, setPostURLs] = useState([
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
    ]);

    return (
        <div className='users-profile'>
            <Profile postURLs={postURLs} />
        </div>
    )
}

export default ProfileView;
