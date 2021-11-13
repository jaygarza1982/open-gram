import React from 'react';
import { ArrowBack, Check } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const PublishHeader = ({imgURL, postBody}) => {

    const history = useHistory();

    const uploadPost = async () => {
        try {
            // TODO: Upload post as base64 here
            console.log('Uploading post...', imgURL);
            await axios.post('/api/posts/create', { caption: postBody, content: imgURL });
        } catch (error) {
            console.log('Error uploading post', error);
        }
    }

    return (
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
                <IconButton
                    onClick={uploadPost}
                >
                    <Check
                        htmlColor='#007FFF'
                    />
                </IconButton>
            </div>
        </div>
    );
}

export default PublishHeader;