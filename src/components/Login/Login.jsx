import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../atoms';
import { withRouter } from 'react-router';

const Login = props => {

    const [loginFields, setLoginFields] = useState({
        username: '',
        password: '',
    });

    const changeLoginFields = (prop, value) => {
        setLoginFields({ ...loginFields, [prop]: value });
    }

    const [user, setUser] = useRecoilState(userAtom);

    const tryLogin = () => {
        try {
            setUser(loginFields.username);
            props.history.push('/');
        } catch (err) {
            console.log('Could not login', err);
        }
    }

    return (
        <Paper className='credential-container' elevation={15}>
            <div className="login-title">open-gram</div>
            <TextField
                label='Username'
                value={loginFields?.username}
                onChange={e => { changeLoginFields('username', e.target.value); } }
            />
            <br />
            <TextField label='Password' type='password' />
            <br />
            <Button
                onClick={tryLogin}
                style={{marginTop: 10, width: '100%'}}
                variant='outlined'
            >
                Login
            </Button>
        </Paper>
    );
}

export default withRouter(Login);