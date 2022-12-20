import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from './../images/logo.png';
import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../routes/axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';



const theme = createTheme();
const LOGIN_URL = "/";

export default function Login() {

  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const {login, error, isLoading} = useLogin();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login(email, password);
      navigateTo("/user/dashboard");
      setSuccess(true);
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
      } else {
          setErrMsg('Registration Failed')
      }
      
  }
};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            width: 500,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}
        >
          <Card sx={{marginTop: 4, borderRadius:3,}}>
          <CardContent>
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 150,
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                margin:'auto',
                marginBottom:0,
              }}
            >
              <img src={Image} alt="logo" sx={{}} />
            </Box>
            <Box sx={{display: 'flex'}}>
            <Typography component="h1" variant="h5">
              Welcome to
            </Typography>
            <Typography component="h1" variant="h5" style={{color: 'green'}} sx={{paddingLeft:1}}>
              OnTime!
            </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2, width:130, borderRadius:10, color: 'black', borderColor: 'black',
                    '&:hover': {
                      backgroundColor: '#DCDCDC',
                      color: 'balck',
                      borderColor:'black'
                    },
                  }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item sx={{margin:'auto'}}>
                  <Link href="/register" variant="body2">
                    {"Not a member? Register Now"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardContent>
        </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}