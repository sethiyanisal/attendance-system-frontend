import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';

const AdminLeaveRequestCard = () => {
  const { auth } = useAuthContext();
  const [leavesData, setLeave] = useState();

  useEffect(() => {
    
    const token = auth.user.token;
      leaveRequestService
        .getAllLeaveRequests(token)
        .then((res) => {
          setLeave(res.data.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <>{leavesData?.map((item, index) => {

      return(
        <Card key={index} sx={{
          display: 'flex',
          flexDirection: 'row',
          width: 1100,
          marginTop: 3,
          marginLeft: 8,
          height:'auto',
          marginBottom:2,
          backgroundColor:'#BDBDBD'
          }}>
        <Box sx={{
          marginTop:2,
          marginLeft:2,
          marginBottom:2,
          textAlign:'left' 
        }}>
          <Typography component="h1" variant="h5" style={{
            fontSize: 16,
        }}>
             {index+1}
          </Typography>
        </Box>
        <Box sx={{
            width:150,
          marginTop:2,
          marginLeft:8,
          paddingLeft:4.5,
          marginBottom:2,
          textAlign:'left' 
        }}>
          <Typography component="h1" variant="h5" style={{
            fontSize: 16,
           
        }}>
           name
          </Typography>
        </Box>
        <Box sx={{
          width:200,
          marginTop:2,
          marginLeft:3,
          marginBottom:2,
          paddingRight:0,
          textAlign:'left' 
        }}>
          <Typography component="h1" variant="h5" style={{
            fontSize: 16,
        }}>
            {item.leavetype}
          </Typography>
        </Box>
        <Box sx={{
          marginTop:2,
          marginLeft:5,
          marginBottom:2,
          textAlign:'middle' 
        }}>
          <Typography component="h1" variant="h5" style={{
            fontSize: 16,
        }}>
             {item.subject}
          </Typography>
        </Box>
        <Box sx={{
          marginTop:1,
          marginLeft:20,
          marginBottom:1,
          textAlign:'left' 
        }}>
        <Button 
        href="/admin/leaverequests/viewleaverequests"
            
            variant="contained"
            sx={{ mt: 0, mb: 0, mr: 0, width:100, borderRadius:10,  color: 'white', backgroundColor:'#1D1D1D', borderColor: 'black',
            '&:hover': {
            backgroundColor: '#393939',
            color: 'white',
            borderColor:'black'
        },   
        }}
        >
            View
        </Button>
        </Box>
    </Card>
      )

    })}
      
   
    </>
  )
}

export default AdminLeaveRequestCard;