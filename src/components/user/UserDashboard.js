import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';
import Image from '../../images/dash1.jpg';
import BarChart from './BarChart';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
 
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


const UserDashboard = () => {

const { auth } = useAuthContext();

const [userData, setUser] = useState();

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


  return (
    <>
        
          <UserSideBar/>
          <Grid item xs={10} sx={{ height:'full' }}>
            <Box sx={{
                  width:'auto',
                  flexDirection: 'column',
                  height:1,
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems:'flex-start'
                  }}
                  >
                  <Typography component="h1" variant="h5" sx={{
                    fontWeight:'bold',
                    paddingTop:6,
                    paddingLeft: 4,
                    paddingBottom:4.5,
                    }}>
                      Dashboard
                  </Typography>
                </Box>
                <Divider sx={{backgroundColor:"grey"}} />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                }}>
                {[userData]?.map((item, index) => {
                  return(
                        <Card key={index} sx={{
                          display: 'flex',
                          width: 500,
                          marginTop: 3,
                          marginLeft: 13,
                          height: 250,
                          borderRadius:5,
                          textAlign:'left'
                          }}>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:2,
                        }}>
                          <Typography component="h1" variant="h3">
                              Hello <br></br>
                              {item?.firstName} !
                          </Typography>
                          <Typography component="h6" variant="h6" style={{
                            color: 'green',
                            fontSize: 16,
                        }}>
                              This is your dashboard today.
                          </Typography>
                        </Box>
                        <Box
                        sx={{
                          width: 200,
                          display: 'flex',
                          flexDirection: 'column',
                          margin:'auto',
                          marginBottom:0,
                        }}
                      >
                        <img src={Image} alt="logo" sx={{}} />
                      </Box>
                    </Card>
                    )
                    })}
                    <Card sx={{
                          
                          height: 250,
                          borderRadius:5,
                          }}>
                        <Box sx={{
                           marginTop:2,
                           marginLeft:2,
                          textAlign:'left' 
                        }}>
                        <ThemeProvider theme={theme}>
                          <Typography component="h1" variant="h5" sx={{
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                              Overall Work Percentage(Weekly)
                          </Typography>
                        </ThemeProvider>
                        </Box>
                        <Box sx={{
                          margin:'auto',
                          marginTop:6,
                        }}>
                          <Typography component="h6" variant="h6" style={{
                            color: 'grey',
                            fontSize: 60,
                            }}>
                              93%
                          </Typography>
                        </Box>
                    </Card>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-24">
                    <Card sx={{
                            height:'auto',
                            borderRadius:5,
                            marginBottom:2,
                            }}>
                          <Box sx={{
                            marginTop:2,
                            marginLeft:2,
                            textAlign:'left' 
                          }}>
                            <ThemeProvider theme={theme}>
                            <Typography component="h1" variant="h5" sx={{
                                                                          fontFamily: 'Oxygen',
                                                                        }}>
                                Overall Work Percentage(Weekly)
                            </Typography>
                            </ThemeProvider>
                          </Box>
                          <Box sx={{
                            margin:2,
                          }}>
                            <BarChart/>
                          </Box>
                      </Card>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </>
  )
}

export default UserDashboard;