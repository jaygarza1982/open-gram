import { Button } from '@mui/material';
import { React, useRef } from 'react';

const PublishUpload = ({setImgURL}) => {

    const imgInputRef = useRef();

    const handleFileInput = e => {
        // Get chosen file, set image URL to data of file
        const [file] = e.target.files;

        const reader = new FileReader();

        reader.addEventListener('load', () => {
            setImgURL(reader.result);
        });

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="publish-upload-container">
            <div className="publish-upload-content">
                <Button
                    onClick={() => { imgInputRef.current.click(); }}
                    variant='outlined'
                >
                    Click to upload
                </Button>
            </div>

            <input
                ref={imgInputRef}
                type='file'
                style={{ display: 'none' }}
                accept='image/*'
                onChange={handleFileInput}
            />
        </div>
    );
}

export default PublishUpload;