import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import loginData from '../data/loginData.json';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



export default function LoginPage() {

  const [id, setid] = useState('');
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

  const login = () => {
    const details = loginData.filter((data) => {
      return (data.id === id && data.pass === pass)
    }
    );

    if (details.length) {
      localStorage.setItem('token', JSON.stringify(details[0]));
      window.location.href = `/${details[0].type}`;
      handleClick();
    }
  };
  return (
    <>
      <h2>Login Page</h2>
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
          label="ID"
          onChange={(e) => setid(e.target.value)}
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
        <Button variant="contained" onClick={login}>
          Log In
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Login Failed"
          action={action}
        />
      </Box>
    </>
  );
}
