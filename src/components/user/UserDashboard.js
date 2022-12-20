import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';
import Image from '../../images/dash1.jpg';
import BarChart from './BarChart';
 
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
  return (
    <>
        <Grid container sx={{ height:'auto',  }}>
          <UserSideBar/>
          <Grid item xs={10} sx={{ height: 1,
                                   borderLeft:1,
                                   }}>
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
                    <Card sx={{
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
                              Hello Chandler !
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
                    <Card sx={{
                          width: 500,
                          marginTop: 3,
                          marginLeft: 8,
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
                    <Card sx={{
                          width: 1065,
                          marginTop: 6,
                          marginLeft: 13,
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
                </Box>
            </Box>
          </Grid>
        </Grid>
        </>
  )
}

export default UserDashboard;