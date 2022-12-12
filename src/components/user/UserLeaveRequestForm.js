import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Divider, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Image from './../../images/logo.png';


const UserLeaveRequestForm = () => {
  return (
    <>
        <Box sx={{
                    width:1,
                    flexDirection: 'column',
                    paddingTop:2,
                }}>
                <Box
                    sx={{
                        width: 120,
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom:0,
            
                    }}
                    >
                    <img src={Image} alt="logo" />
                </Box>
                <Divider variant='middle' sx={{backgroundColor:"grey"}} />
                <Box sx={{
                    width:100,
                    flexDirection: 'row',
                    paddingTop:2,
                    justifyContent: 'flex-start'
                }}>
                    <ArrowBackIosNewRounded/>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems:'flex-start',
                  marginLeft:30
                  }}
                  >
                  <Typography component="h1" variant="h5" sx={{
                    paddingTop:3,
                    paddingBottom:2,
                    }}>
                      Leave Requests
                  </Typography>
                </Box>

                <Box component="form" noValidate sx={{ mt: 3, ml:30, width: 1000, }}>
                <Grid container spacing={4}>
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
                <FormControl fullWidth>
                <InputLabel id="leave-type">Leave Type</InputLabel>
                    <Select
                        labelId="leave-type"
                        id="leave-type"
                        label="leave-type"
                    >
                        <MenuItem >Personal Leave</MenuItem>
                        <MenuItem >Medical Leave</MenuItem>
                        <MenuItem >Annual Leave</MenuItem>
                    </Select>
                    </FormControl>
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
                        fullWidth
                        multiline
                        label="Subject (reason)"
                        InputProps={{
                            inputComponent: TextareaAutosize
                        }}
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                variant="contained"
                sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10,  color: 'white', backgroundColor:'#1D1D1D', borderColor: 'black',
                '&:hover': {
                backgroundColor: '#393939',
                color: 'white',
                borderColor:'black'
                },   
                }}
                >
                Send Request
                </Button>
            </Box>
        </Box>
    </>
  )
}

export default UserLeaveRequestForm;