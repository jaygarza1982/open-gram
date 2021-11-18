import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms';
import useFetch from '../Hooks/useFetch';

const Profile = ({ postURLs, postKeys }) => {

    const [user] = useRecoilState(userAtom);
    const [posts] = useFetch(`/api/posts/list/${user}`);

    return (
        <div className='profile'>
            <ProfileInfo
                picURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                posts={13}
                followers={5843}
                following={735}
                name='Johnny'
            />

            <ProfilePosts postURLs={postURLs || posts.map(p => p.content)} postKeys={postKeys || posts.map(p => p._id)} />
        </div>
    )
}

export default Profile;
