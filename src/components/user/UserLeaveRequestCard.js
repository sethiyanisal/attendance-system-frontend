import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';


const UserLeaveRequestCard = () => {

  const { auth } = useAuthContext();
  const [leaveData, setLeave] = useState();

  useEffect(() => {
    const userID = auth.user.id;
    const token = auth.user.token;
      leaveRequestService
        .getLeaveRequestsById(userID, token)
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
        <Card sx={{
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
                             #01
                          </Typography>
                        </Box>
                        <Box sx={{
                            width:150,
                          marginTop:2,
                          marginLeft:8,
                          paddingLeft:0,
                          marginBottom:2,
                          textAlign:'right' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             Personal Leave
                          </Typography>
                        </Box>
                        <Box sx={{
                          width:200,
                          marginTop:2,
                          marginLeft:15,
                          marginBottom:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             On 27th nov this month
                          </Typography>
                        </Box>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:11,
                          marginBottom:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             Pending
                          </Typography>
                        </Box>
                        <Box sx={{
                          marginTop:1,
                          marginLeft:20,
                          marginBottom:1,
                          textAlign:'left' 
                        }}>
                        <Button
                            type="submit"
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
    </>
  )
}

export default UserLeaveRequestCard;