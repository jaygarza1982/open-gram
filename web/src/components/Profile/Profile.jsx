import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfilePosts from './ProfilePosts';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms';
import useFetch from '../Hooks/useFetch';

const Profile = ({ posts }) => {

    const [user] = useRecoilState(userAtom);
    const [postsFromCurrentUser] = useFetch(`/api/posts/list/${user}`);

    return (
        <div className='profile'>
            <ProfileInfo
                picURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                posts={13}
                followers={5843}
                following={735}
                name='Johnny'
            />

            {/* Render given posts if defined. If not, fetch current user posts */}
            <ProfilePosts posts={posts || postsFromCurrentUser} />
        </div>
    )
}

export default Profile;
