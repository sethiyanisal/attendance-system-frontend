import { Card, Container, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Typography} from '@mui/material';
import Image from '../../images/dash1.jpg';
import BarChart from '../user/BarChart';



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
const AdminDashboardCards = () => {
  return (
        <>
        
        <Grid container spacing={2}>
  <Grid item lg={4} md={6} sm={6} xs={8}>
   
    <Card sx={{
                            width: 'flex',
                            display: 'flex',
                            height: 'auto',
                            borderRadius:5,
                            textAlign:'left'
                            }}>
                              <Container>
                              <Box sx={{
                            marginTop:2,
                            marginLeft:2,
                          }}>
                            <Typography component="h1" variant="h3">
                                Hello Admin !
                            </Typography>
                            <Typography component="h6" variant="h6" style={{
                              color: 'green',
                              fontSize: 16,
                          }}>
                                This is your dashboard today.
                            </Typography>
                            <Box
                          sx={{
                            height: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            margin:'auto',
                            marginBottom:0,
                          }}
                        >
                          <img src={Image} alt="logo" sx={{}} />
                        </Box>
                          </Box>
                              </Container>
                         
                         
                      </Card>
   
  
  </Grid>
  <Grid item lg={4} md={6} sm={6} xs={4}>
  <Card sx={{
                          
                          height: 'auto',
                          borderRadius:5,
                          }}>
                            <Container>
                            <Box sx={{
                            marginTop:2,
                            marginLeft:2,
                            textAlign:'left' 
                          }}>
                            <ThemeProvider theme={theme}>
                            <Typography component="h1" variant="h5" sx={{
                                                                          fontFamily: 'Oxygen',
                                                                        }}>
                               
                              Working Count
                            </Typography>
                            </ThemeProvider>
                          </Box>
                        
                            </Container>
                             
                    </Card>
  </Grid>
  <Grid item lg={4} md={6} sm={6} xs={4}>
  <Card sx={{
                          
                          height: 'auto',
                          borderRadius:5,
                          }}>
                            <Container>
                            <Box sx={{
                            marginTop:2,
                            marginLeft:2,
                            textAlign:'left' 
                          }}>
                            <ThemeProvider theme={theme}>
                            <Typography component="h1" variant="h5" sx={{
                                                                          fontFamily: 'Oxygen',
                                                                        }}>
                               Todays Leave Count

                              4 
                            </Typography>
                            </ThemeProvider>
                          </Box>
                        
                            </Container>
                             
                    </Card>
  </Grid>
  <Grid item  md={12} xs={12}>
  <Card sx={{
                            height:'auto',
                            borderRadius:5,
                            marginBottom:2,
                            }}>
                              <Container>
                              <Box sx={{
                           marginTop:2,
                           marginLeft:2,
                          textAlign:'left' 
                        }}>
                        <ThemeProvider theme={theme}>
                          <Typography component="h1" variant="h5" sx={{
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                              Employees Working hours
                          </Typography>
                        </ThemeProvider>
                        </Box>
                        <Box sx={{
                            margin:2,
                          }}>
                            <BarChart/>
                          </Box>
                              </Container>
                        
                          
                      </Card>
  </Grid>
  
</Grid>
        </>
          
          
  )
}

export default AdminDashboardCards;