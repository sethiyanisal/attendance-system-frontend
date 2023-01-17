import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Divider, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Image from './../../images/logo.png';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';


const UserLeaveRequestForm = () => {

const { auth } = useAuthContext();
const [userData, setUser] = useState();
const [userFirstname, setFirstName] = useState();
const [userLasttname, setLastName] = useState();
const [userEmail, setEmail] = useState();
const [userContactNum, setContactNum] = useState();
const [userLeaveType, setLeaveType] = useState();

  const handleChange = (e) => {
    setLeaveType(e.target.value);
  };

useEffect(() => {
    const userID = auth.user.id;
    const token = auth.user.token;
      leaveRequestService
        .getUserDetailsById(userID, token)
        .then((res) => {
          setUser(res.data.data);
          setFirstName(res.data.data.firstName);
          setLastName(res.data.data.lastName);
          setEmail(res.data.data.email);
          setContactNum(res.data.data.contactnum);
          console.log()
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
    
return (
    <>
    {[userData]?.map((item, index) => {
        return(
            <Box key={index} sx={{
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
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value={item?.firstName || ""}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={item?.lastName || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={item?.email || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="contactnum"
                        label="Contact Number"
                        name="contactnum"
                        value={item?.contactnum || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl fullWidth>
                    <InputLabel id="leave-type">Leave Type</InputLabel>
                        <Select
                            labelId="leave-type"
                            id="leave-type"
                            label="leave-type"
                            value={userLeaveType}
                            onChange={handleChange}
                        >
                            <MenuItem >Personal Leave</MenuItem>
                            <MenuItem >Medical Leave</MenuItem>
                            <MenuItem >Annual Leave</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="date"
                            required
                            fullWidth
                            id="datefrom"
                            label="From"
                            name="datefrom"
                            defaultValue="2019-05-24"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                            type="date"
                            required
                            fullWidth
                            id="dateto"
                            label="To"
                            name="dateto"
                            defaultValue="2019-05-24"
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
        )
    })}
        
    </>
  )
}

export default UserLeaveRequestForm;