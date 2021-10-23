import { Button } from '@mui/material';
import React from 'react';

const PublishUpload = () => {
    return (
        <div className="publish-upload-container">
            <div className="publish-upload-content">
                <Button
                    // onClick={tryLogin}
                    // style={{ marginTop: 10, width: '100%' }}
                    variant='outlined'
                >
                    Click to upload
                </Button>
            </div>
        </div>
    );
}

export default PublishUpload;