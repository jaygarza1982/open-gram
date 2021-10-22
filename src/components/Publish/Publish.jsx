import { ArrowBack, Check } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { navShownAtom, userAtom } from '../../atoms';
import Post from '../Post/Post';

const Publish = () => {

    const history = useHistory();

    const [, setNavShown] = useRecoilState(navShownAtom);
    const [user] = useRecoilState(userAtom);

    const [postBody, setPostBody] = useState('');

    useEffect(() => {
        // Hide nav when here
        setNavShown(false);

        // Show nav on unmount
        return ()  => {
            setNavShown(true);
        }
    }, []);

    return (
        <>
            <div className="publish-header">
                <div className="publish-header-item app-header-button">
                    <IconButton>
                        <ArrowBack
                            onClick={() => { history.goBack(); }}
                        />
                    </IconButton>
                </div>
                <div className="publish-header-item">
                    <h1>New Post</h1>
                </div>
                <div className="publish-header-item app-header-button">
                    <IconButton>
                        <Check
                            htmlColor='#007FFF'
                        />
                    </IconButton>
                </div>
            </div>

            {/* TODO make post 50% width and height, margin auto
            Give caption padding, make multi line and bigger height */}
            <Post
                username={user}
                profilePicURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                imgURL={'https://www.w3schools.com/tags/img_girl.jpg'}
                body={postBody}
                likedBy={[]}
                comments={[]}
                date={new Date()}
            />

            <TextField
                label='Write a caption...'
                value={postBody}
                onChange={e => { setPostBody(e.target.value); }}
            />
        </>
    );
}

export default Publish;
