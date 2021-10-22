import { ArrowBack, Check } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { navShownAtom } from '../../atoms';

const Publish = () => {

    const history = useHistory();

    const [, setNavShown] = useRecoilState(navShownAtom);

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

            {/* TODO: Render textfield to represent post body
            below that render a template post of what it would look like on a feed */}
        </>
    );
}

export default Publish;
