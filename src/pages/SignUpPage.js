import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import loginData from '../data/loginData.json';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export default function SignUpPage() {

    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [pass, setpass] = useState('');

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                Close
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const signUp = () => {
        //Add Data to File
    };
    return (
        <>
            <h2>Sign Up Page</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{
                    backgroundColor: '#f6f8f9',
                    width: 'fit-content',
                    margin: 'auto',
                    padding: '5rem',
                    border: '1px solid #f0f0f0',
                    borderRadius: '2rem',
                }}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Name"
                    onChange={(e) => setname(e.target.value)}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Email"
                    onChange={(e) => setemail(e.target.value)}
                />
                <br />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="Password"
                    onChange={(e) => setpass(e.target.value)}
                />
                <br />
                <Button variant="contained" onClick={signUp}>
                    Sign Up
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Sign Up Failed"
                    action={action}
                />
            </Box>
        </>
    );
}
