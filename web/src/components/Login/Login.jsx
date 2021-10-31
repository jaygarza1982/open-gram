import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { navShownAtom, userAtom } from '../../atoms';
import { withRouter, useHistory } from 'react-router';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const Login = props => {

    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const [loginFields, setLoginFields] = useState({
        email: '',
        password: '',
    });

    const changeLoginFields = (prop, value) => {
        setLoginFields({ ...loginFields, [prop]: value });
    }

    const [user, setUser] = useRecoilState(userAtom);
    const [, setNavShown] = useRecoilState(navShownAtom);

    const tryLogin = async () => {
        try {
            const { data } = await axios.post('/auth/signin', {
                'formFields': [
                    {
                        'id': 'email',
                        'value': loginFields.email
                    },
                    {
                        'id': 'password',
                        'value': loginFields.password
                    }
                ]
            });

            console.log(data);

            if (data?.status !== 'OK') throw data?.status;

            setUser(loginFields.email);
            setNavShown(true);
            props.history.push('/');
        } catch (err) {
            enqueueSnackbar('Could not login ' + err);
        }
    }

    if (user != '') history.push('/');

    return (
        <>
            <video autoPlay muted loop style={{ position: 'fixed' }}>
                <source src='assets/login-video.mp4' type='video/mp4' />
            </video>
            <Paper className='credential-container' elevation={15}>
                <div className='login-title'>open-gram</div>
                <TextField
                    label='Email'
                    value={loginFields?.email}
                    onChange={e => { changeLoginFields('email', e.target.value); }}
                />
                <br />
                <TextField
                    label='Password'
                    type='password'
                    value={loginFields?.password}
                    onChange={e => { changeLoginFields('password', e.target.value); }}
                />
                <br />
                <Button
                    onClick={tryLogin}
                    style={{ marginTop: 10, width: '100%' }}
                    variant='outlined'
                >
                    Login
                </Button>
                <br />

                <div
                    style={{
                        marginTop: 25,
                        float: 'left',
                        color: '#257dd4',
                        textDecoration: 'underline'
                    }}
                    onClick={() => { history.push('/register'); }}
                >
                    Sign Up
                </div>
            </Paper>
        </>
    );
}

export default withRouter(Login);