import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const theme = createTheme();
const UserRequestLeave = () => {

const { auth } = useAuthContext();
const navigateTo = useNavigate();
const navigateBack = () => {
    // 👇️ navigate back
    navigateTo('/user/leaverequests');};
// const [userFirstname, setFirstName] = useState();
// const [userLasttname, setLastName] = useState();
// const [userEmail, setEmail] = useState();
// const [userContactNum, setContactNum] = useState();

const [userData, setUser] = useState();
const [userLeaveType, setLeaveType] = useState();
const [userDateFrom, setDateFrom] = useState();
const [userDateTo, setDateTo] = useState();
const [userSubject, setSubject] = useState();
const [userLeaveStatus, setStatus] = useState("Pending");



useEffect(() => {
    const userID = auth.user.id;
    const token = auth.user.token;
      leaveRequestService
        .getUserDetailsById(userID, token)
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let leave = {
        leavetype: userLeaveType,
        dateFrom: userDateFrom,
        dateTo: userDateTo,
        subject: userSubject,
        status: userLeaveStatus
    };
        
   
    try {
        const token = auth.user.token;
        leaveRequestService
            .postLeaveRequest(token, leave)
            .then((res) => {
            console.log("Successfully added a leave request");
            navigateTo("/user/leaverequests");
            })
            .catch((error) => {
            console.log(error);
            });
        
    } catch (err) {
        console.log(err) ;
    }
}

    
return (
    <>
    <Container>
           {[userData]?.map((item, index) => {
                   return(
                       <Box component="form" noValidate onSubmit={handleSubmit} sx={{  width: 1000, }}>
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
                                       onChange={(e) => setLeaveType(e.target.value)}
                                   >
                                       <MenuItem value="Personal" >Personal Leave</MenuItem>
                                       <MenuItem value="Medical">Medical Leave</MenuItem>
                                       <MenuItem value="Annual">Annual Leave</MenuItem>
                                   </Select>
                                   </FormControl>
                               </Grid>
                               <Grid item xs={12} sm={6}>
                               <LocalizationProvider dateAdapter={AdapterDayjs}>
                                   <DatePicker
                                       fullWidth
                                       id="datefrom"
                                       name="datefrom"
                                       label="From"
                                       value={userDateFrom}
                                       onChange={(e) => {
                                       setDateFrom(e);
                                       }}
                                       renderInput={(params) => <TextField fullWidth {...params} />}
                                   />
                               </LocalizationProvider>
                               </Grid>
                               <Grid item xs={12} sm={6}>
                               <LocalizationProvider dateAdapter={AdapterDayjs}>
                                   <DatePicker
                                       fullWidth
                                       id="dateto"
                                       name="dateto"
                                       label="To"
                                       value={userDateTo}
                                       onChange={(e) => {
                                       setDateTo(e);
                                       }}
                                       renderInput={(params) => <TextField fullWidth {...params} />}
                                   />
                               </LocalizationProvider>
                               </Grid>
                               <Grid item xs={12}>
                               <TextField
                                       fullWidth
                                       multiline
                                       label="Subject (reason)"
                                       InputProps={{
                                           inputComponent: TextareaAutosize
                                       }}
                                       value={userSubject}
                                       onChange={(e) => setSubject(e.target.value)}
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
                   )
               })}
           </Container>
   </>
 )
}

export default UserRequestLeave;