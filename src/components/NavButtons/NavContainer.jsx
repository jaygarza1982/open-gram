import { Home, Search, AddBox } from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';
import { withRouter } from 'react-router';
import React from 'react';
import { navShownAtom } from '../../atoms';
import { useRecoilState } from 'recoil';

const NavContainer = props => {

    const [navShown] = useRecoilState(navShownAtom);

    return (
        <>
            {
                navShown && (
                    <div className="nav-button-container">
                        <div className="nav-button-grid">
                            <div className="nav-button">
                                <IconButton onClick={() => { props.history.push('/'); }}>
                                    <Home />
                                </IconButton>
                            </div>
                            <div className="nav-button">
                                <IconButton>
                                    <Search />
                                </IconButton>
                            </div>
                            <div className="nav-button">
                                <IconButton>
                                    <AddBox onClick={() => { props.history.push('/publish'); }} />
                                </IconButton>
                            </div>
                            <div className="nav-button">
                                <IconButton onClick={() => { props.history.push('/profile'); }}>
                                    <Avatar src="https://www.w3schools.com/tags/img_girl.jpg" />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default withRouter(NavContainer);