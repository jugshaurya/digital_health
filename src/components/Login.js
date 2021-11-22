import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Container,
  Typography,
} from '@mui/material';
import Navbar from './Navbar';

// import {} from '@mui/icons'

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            m: 8,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Avatar
            sx={{ m: 2 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-jacaqjV6SQBh7JefzmuskmXnGeCPoO8PV_Geq91LI1p2Kbw3_TLrcMn1Xqwr82-nq8&usqp=CAU"
          />
          <Typography component="h2">Login</Typography>
          <Box sx={{ m: 2 }} component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="1"
              name="Email"
              label="Email"
              type="email"
              required
            />
            <TextField
              fullWidth
              id="2"
              name="Password"
              label="Password"
              type="password"
              required
            />
            <Button fullWidth id="3" variant="contained" type="Submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
