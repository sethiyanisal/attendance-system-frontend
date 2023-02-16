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
import { useLocation } from 'react-router-dom';

const theme = createTheme();
const UserViewLeaveCard = () => {

    const navigateTo = useNavigate();
    const { auth } = useAuthContext();
    const [leaveData, setLeave] = useState();
    const {state} = useLocation()
    const [userData, setUser] = useState();
    const {location} = useLocation();
    const [userLeaveStatus, setStatus] = useState();
    const navigateBack = () => {
        // 👇️ navigate back
        navigateTo('/user/leaverequest');
      };
    useEffect(() => {
        const leaveID = state.id;
        const token = auth.user.token;
          leaveRequestService
            .viewLeaveRequestById(leaveID,token)
            .then((res) => {
                setLeave(res.data.data);
              console.log(res.data)
            })
            .catch((error) => {
              console.log(error);
            });
      }, []);

        
return (
    <>
    <Container>
           {[leaveData]?.map((item, index) => {
                   return(
                       <Box component="form" noValidate  sx={{  width: 1000, }}>
                               <Grid container spacing={4}>
                               <Grid item xs={12} sm={6}>
                                   <TextField
                                   name="firstName"
                                   required
                                   fullWidth
                                   id="firstName"
                                   label="First Name"
                                   value={item?.postedBy.firstName || ""}
                                   />
                               </Grid>
                               <Grid item xs={12} sm={6}>
                                   <TextField
                                   required
                                   fullWidth
                                   id="lastName"
                                   label="Last Name"
                                   name="lastName"
                                   value={item?.postedBy.lastName || ""}
                                   />
                               </Grid>
                               <Grid item xs={12}>
                                   <TextField
                                   required
                                   fullWidth
                                   id="email"
                                   label="Email"
                                   name="email"
                                   value={item?.postedBy.email || ""}
                                   />
                               </Grid>
                               <Grid item xs={12}>
                                   <TextField
                                   required
                                   fullWidth
                                   id="contactnum"
                                   label="Contact Number"
                                   name="contactnum"
                                   value={item?.postedBy.contactnum || ""}
                                   />
                               </Grid>
                               <Grid item xs={12}>
                               <FormControl fullWidth>
                            <InputLabel id="leave-type"></InputLabel>
                            <TextField
                                
                                id="leave-type"
                                label="leave-type"
                                value={item?.leavetype || ""}
                                />
                                  
                                </FormControl>
                               </Grid>
                               <Grid item xs={12} sm={6}>
                               <InputLabel id="date-from"></InputLabel>
                            <TextField
                                
                                fullWidth
                                id="datefrom"
                                name="datefrom"
                                label="From"
                                value={item?.dateFrom || ""}
                                />
                               </Grid>
                               <Grid item xs={12} sm={6}>
                               <InputLabel id="date-to"></InputLabel>
                            <TextField
                                
                                fullWidth
                                    id="dateto"
                                    name="dateto"
                                    label="To"
                                    value={item?.dateTo || ""}
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
                                    value={item?.subject || ""}
                                    
                                />
                               </Grid>
                               </Grid>
                               
                           </Box>
                   )
               })}
           </Container>
   </>
 )
}

export default UserViewLeaveCard;