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


const theme = createTheme();

export default function SignUp() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactnum"
                  label="Contact Number"
                  name="contactnum"
                  autoComplete="contactnum"
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
                  autoComplete="new-password"
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
                  autoComplete="new-con-password"
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