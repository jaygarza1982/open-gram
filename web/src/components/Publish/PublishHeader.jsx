import React from 'react';
import { ArrowBack, Check } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const PublishHeader = () => {

    const history = useHistory();

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
                <IconButton>
                    <Check
                        htmlColor='#007FFF'
                    />
                </IconButton>
            </div>
        </div>
    );
}

export default PublishHeader;