import { Home, Search, AddBox } from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';
import { withRouter } from 'react-router';
import React from 'react';
import { userAtom } from '../../atoms';
import { useRecoilState } from 'recoil';

const NavContainer = props => {

    const [user] = useRecoilState(userAtom);

    return (
        <>
            {
                user && (
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
                                    <AddBox />
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