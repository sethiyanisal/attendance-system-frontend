import { Card, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Typography} from '@mui/material';
import Image from '../../images/dash1.jpg';
import BarChart from '../user/BarChart';
import AdminSideBar from './AdminSideBar';


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
const AdminDashboard = () => {
  return (
        <>
        <AdminSideBar/>
        <div className="l-app__body">
            <header className="l-header">
              <div className="l-header__wrapper">
                  <h4 className="heading-4">Dashboard</h4>
              </div>
              
            </header>
            <div className="l-page">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-24">
                    <Card sx={{
                            width: '100%',
                            display: 'flex',
                            height: 250,
                            borderRadius:5,
                            textAlign:'left'
                            }}>
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
                          </Box>
                          <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin:'auto',
                            marginBottom:0,
                          }}
                        >
                          <img src={Image} alt="logo" sx={{}} />
                        </Box>
                      </Card>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-24">
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
                                                                          fontFamily: 'Oxygen',
                                                                        }}>
                               Todays Leave Count

                              4 
                            </Typography>
                            </ThemeProvider>
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
                          
                      </Card>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </>
          
          
  )
}

export default AdminDashboard;