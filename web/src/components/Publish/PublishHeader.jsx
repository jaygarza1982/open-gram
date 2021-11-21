import React from 'react';
import { ArrowBack, Check } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { fetchCacheAtom } from '../../atoms';

const PublishHeader = ({imgURL, postBody}) => {

    const history = useHistory();

    const [, setFetchCache] = useRecoilState(fetchCacheAtom);

    const uploadPost = async () => {
        try {
            // TODO: Progress bar for upload
            await axios.post('/api/posts/create', { caption: postBody, content: imgURL });

            // Clear cache after posting
            // TODO: Might want to only clear the fetched user posts cache instead of whole cache
            setFetchCache(new Object());

            // Redirect to profile when uploaded
            history.push('/profile');
        } catch (error) {
            // TODO: Snackbar for failure message
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