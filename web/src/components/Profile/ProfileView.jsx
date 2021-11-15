import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../Hooks/useFetch';
import Profile from './Profile';

const ProfileView = ({ }) => {

    const { user } = useParams();
    const userPosts = useFetch(`/api/posts/list/${user}`);

    return (
        <div className='users-profile'>
            <Profile
                postURLs={userPosts?.map(p => p.content)}
                postKeys={userPosts?.map(p => p._id)}
            />
        </div>
    )
}

export default ProfileView;
