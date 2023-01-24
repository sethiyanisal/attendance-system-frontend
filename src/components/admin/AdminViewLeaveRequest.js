import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Divider, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Image from './../../images/logo.png';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminViewLeaveRequest = () => {
    const navigateTo = useNavigate();
    const { auth } = useAuthContext();
    const [leaveData, setLeave] = useState();
    const {state} = useLocation()
    const [userData, setUser] = useState();
    const {location} = useLocation();
    const navigateBack = () => {
        // 👇️ navigate back
        navigateTo('/admin/leaverequests');
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
        
    <div className="l-app__body">
    <header className="l-header">
               
                <div className="l-header__wrapper">
                <button onClick={navigateBack} className="pf-icon-btn pf-btn-secondary"  ><ArrowBackIosNewRounded/>
                </button>
                    <h4 className="heading-4">Leave request</h4>
                </div>
                
    </header>
    <div className="l-page">
        <div className="container">
                {[leaveData]?.map((item, index) => {
                return(
                    <Box component="form"  sx={{  width: 1000, }}>
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    fullWidth
                                    id="datefrom"
                                    name="datefrom"
                                    label="From"
                                    value={item?.dateFrom || ""}
                                    
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
                                    value={item?.dateTo || ""}
                                    
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
                                    value={item?.subject || ""}
                                    
                                />
                            </Grid>
                            </Grid>
                            <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10, marginRight:'2px', color: 'white', backgroundColor:'green', borderColor: 'black',
                            '&:hover': {
                            backgroundColor: '#393939',
                            color: 'white',
                            borderColor:'black'
                            },   
                            }}
                            >
                           Accept
                            </Button>
                            <Button
                            
                            type="submit"
                            variant="contained"
                            sx={{ mt: 4, mb: 4, mr: 0, width:'auto', borderRadius:10, marginLeft:'2px', color: 'white', backgroundColor:'red', borderColor: 'black',
                            '&:hover': {
                            backgroundColor: '#393939',
                            color: 'white',
                            borderColor:'black'
                            },   
                            }}
                            >
                            Reject
                            </Button>
                        </Box>
                )
            })}
    </div>
    </div>
    

 </div>

    
</>
  )
}

export default AdminViewLeaveRequest;