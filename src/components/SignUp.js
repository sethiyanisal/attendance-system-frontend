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
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../routes/axios';


const theme = createTheme();

const REGISTER_URL = "/register";

export default function SignUp() {

    const navigateTo = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactnum, setContactNum] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
      e.preventDefault();
     
      try {
          const response = await Axios.post(REGISTER_URL,
              JSON.stringify({ firstName, lastName, email, contactnum, password, conpassword }),
              {
                  headers: { 'Content-Type': 'application/json' },
              }
          );
          navigateTo("/");
          // TODO: remove console.logs before deployment
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response))
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
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main"  sx={{paddingTop: 4, paddingBottom: 4,}}>
        <CssBaseline />
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
        <Box sx={{
                width: 600,
                marginTop: 0,
                display: 'flex',
                flexDirection: 'column',
                margin:'auto',
                }}
                >
        <Typography component="h1" variant="h5" sx={{fontWeight:'bold',}}>
            Sign up to OnTime!
        </Typography>
        <Typography component="h1" variant="h5">
          <Link href="#" variant="body2" underline="hover" color="inherit">
                  Already have an account? Sign in
          </Link>
        </Typography>
        </Box>
        <Box
          sx={{
            width: 600,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}
        >
          <Card sx={{marginTop: 4, borderRadius:3,}}>
          <CardContent>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  ref={userRef}
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  ref={userRef}
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  ref={userRef}
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactnum"
                  label="Contact Number"
                  name="contactnum"
                  ref={userRef}
                  autoComplete="off"
                  value={contactnum}
                  onChange={(e) => setContactNum(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  ref={userRef}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conpassword"
                  label="Confirm Password"
                  type="password"
                  id="conpassword"
                  ref={userRef}
                  autoComplete="off"
                  value={conpassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2, width:200, borderRadius:15,  color: 'black', borderColor: 'black',
              '&:hover': {
                backgroundColor: '#DCDCDC',
                color: 'balck',
                borderColor:'black'
            },   
            }}
            >
              Sign Up
            </Button>
          </Box>
          </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}