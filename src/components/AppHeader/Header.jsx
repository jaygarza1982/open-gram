import { AddBox, Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms';

const Header = ({ }) => {

    const [title, setTitle] = useState('open-gram');

    const [user] = useRecoilState(userAtom);

    return (
        <>
            {
                user != '' && (
                    <>
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
                    </>
                )
            }
        </>
    )
}

export default Header;
