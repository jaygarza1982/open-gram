import { Button, Paper, TextField } from '@mui/material';
import React from 'react';

const Login = () => {
    return (
        <Paper className='credential-container' elevation={15}>
            <div className="login-title">open-gram</div>
            <TextField label='Username' />
            <br />
            <TextField label='Password' type='password' />
            <br />
            <Button style={{marginTop: 10, width: '100%'}} variant='outlined'>
                Login
            </Button>
        </Paper>
    );
}

export default Login;