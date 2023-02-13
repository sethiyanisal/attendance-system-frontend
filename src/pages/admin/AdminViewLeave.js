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

const theme = createTheme();
const AdminViewLeave = () => {


const navigateTo = useNavigate();
const navigateBack = () => {
    // 👇️ navigate back
    navigateTo('/admin/leaverequests');};



    
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
                            paddingLeft:'39%',
                            alignContent:'center',
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                            Leave request
                          </Typography>
                      
                      
                   
     </Toolbar>
     <Divider/>    
                 
                   
     <Box
          sx={{
            paddingTop:'5%',
            width: 500,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin:'auto',
          }}>
       <AdminViewLeaveCard/>
       </Box>

     </Container>
        
     </ThemeProvider>
      
     
        
        
   
        
   </>
 )
}


export default AdminViewLeave;