import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Divider, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserViewLeaveCard from '../../components/user/UserViewLeaveCard';
import AdminViewLeaveCard from '../../components/admin/AdminViewLeaveCard';
import AdminLeaveAllocationCard from '../../components/admin/AdminLeaveAllocationCard';

const theme = createTheme();
const AdminLeaveAllocation = () => {


const navigateTo = useNavigate();
const navigateBack = () => {
    // 👇️ navigate back
    navigateTo('/admin/adminleavemanagement/leavesdetail');};



    
return (
    <>
     <ThemeProvider theme={theme}>
     <Container component="main">
     <CssBaseline />
     
    
    <Toolbar>
     <Button onClick={navigateBack} align="right" variant="contained" color="error">
                              <ArrowBackIosNewRounded/>
                            </Button><div />
     <Typography component="h1" variant="h5" sx={{
                            paddingLeft:'38%',
                            alignContent:'center',
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                           Employee Leaves Details
                          </Typography>
                      
                      
                   
     </Toolbar>
     <Divider/>    
                 
                   
     <Box
          sx={{
           
            width: 500,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}>
       <AdminLeaveAllocationCard/>
       </Box>

     </Container>
        
     </ThemeProvider>
      
     
        
        
   
        
   </>
 )
}


export default AdminLeaveAllocation;