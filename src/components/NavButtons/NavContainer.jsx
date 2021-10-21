import { Home, Search, AddBox } from '@mui/icons-material';
import { IconButton, Avatar } from '@mui/material';
import { withRouter } from 'react-router';
import React from 'react';

const NavContainer = props => {
    return (
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
    );
}

export default withRouter(NavContainer);