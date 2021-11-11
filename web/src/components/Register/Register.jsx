import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { navShownAtom, userAtom } from '../../atoms';
import { withRouter, useHistory } from 'react-router';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const Register = props => {

    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const [loginFields, setLoginFields] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const changeLoginFields = (prop, value) => {
        setLoginFields({ ...loginFields, [prop]: value });
    }

    const [user, setUser] = useRecoilState(userAtom);
    const [, setNavShown] = useRecoilState(navShownAtom);

    const tryLogin = async () => {
        try {
            const { email, password, passwordConfirm } = loginFields;

            if (password != passwordConfirm) throw 'Passwords do not match';

            const registerForm = {
                'formFields': [
                    {
                        'id': 'email',
                        'value': email
                    },
                    {
                        'id': 'password',
                        'value': password
                    }
                ]
            };

            const { data } = await axios.post('/auth/signup', registerForm);

            console.log(data);

            if (data?.status !== 'OK') throw data?.status;

            // Try logging in with our new credentials
            try {
                await axios.post('/auth/signin', registerForm);
            } catch (error) {
                console.log('Could not login after register', error);
            }

            // Register user in non-auth DB
            try {
                const { registerResp } = await axios.post('/api/users/register', { email, name: 'Full name' });
                console.log(registerResp);
            } catch (error) {
                console.log('Could not register with non-auth DB', error);
            }

            setUser(email);
            setNavShown(true);
            props.history.push('/');
        } catch (err) {
            enqueueSnackbar('Could not register ' + err);
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
                <TextField
                    label='Confirm Password'
                    type='password'
                    value={loginFields?.passwordConfirm}
                    onChange={e => { changeLoginFields('passwordConfirm', e.target.value); }}
                />
                <br />
                <Button
                    onClick={tryLogin}
                    style={{ marginTop: 10, width: '100%' }}
                    variant='outlined'
                >
                    Register
                </Button>
            </Paper>
        </>
    );
}

export default withRouter(Register);