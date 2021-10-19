import { AddBox, Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

const Header = ({ }) => {

    const [title, setTitle] = useState('open-gram');

    return (
        <div className='app-header'>
            <div className="app-header-title">{title}</div>
            <div className="app-header-button">
                <IconButton>
                    <Menu />
                </IconButton>
            </div>
            <div className="app-header-button">
                <IconButton>
                    <AddBox />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
