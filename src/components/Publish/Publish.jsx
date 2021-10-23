import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { navShownAtom, userAtom } from '../../atoms';
import Post from '../Post/Post';
import PublishHeader from './PublishHeader';
import PublishUpload from './PublishUpload';

const Publish = () => {
    const [, setNavShown] = useRecoilState(navShownAtom);
    const [user] = useRecoilState(userAtom);

    const [imgURL, setImgURL] = useState('');

    const [postBody, setPostBody] = useState('');

    useEffect(() => {
        // Hide nav when here
        setNavShown(false);

        // Show nav on unmount
        return () => {
            setNavShown(true);
        }
    }, []);

    return (
        <>
            <PublishHeader />

            <div className="publish-template">
                {
                    imgURL == '' ? <PublishUpload /> :
                        (
                            <>
                                <Post
                                    username={user}
                                    profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                                    // imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                                    imgURL={imgURL}
                                    body={postBody}
                                    likedBy={[]}
                                    comments={[]}
                                    date={new Date()}
                                />
                                <div className="caption-textfield-container">
                                    <TextField
                                        label='Write a caption...'
                                        value={postBody}
                                        onChange={e => { setPostBody(e.target.value); }}
                                        multiline
                                        rows={4}
                                    />
                                </div>
                            </>
                        )
                }

            </div>
        </>
    );
}

export default Publish;
