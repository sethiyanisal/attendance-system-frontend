import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

import {Typography} from '@mui/material';
import Image from '../../images/dash1.jpg';
import BarChart from './BarChart';
import AdminSideBar from './AdminSideBar';

const AdminDashboard = () => {
  return (
        <Grid container sx={{ height:'auto' }}>
          <AdminSideBar/>
          <Grid item xs={10} sx={{ height: 1 }}>
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
                          marginLeft: 4,
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
                          <Typography component="h1" variant="h5">
                             Employee Working Hours
                          </Typography>
                        </Box>
                        <Box sx={{
                          margin:'auto',
                          marginTop:6,
                        }}>
                          <Typography component="h6" variant="h6" style={{
                            color: 'grey',
                            fontSize: 60,
                            }}>
                             <BarChart/>
                          </Typography>
                        </Box>
                    </Card>
                    <Card sx={{
                          width: 1065,
                          marginTop: 6,
                          marginLeft: 4,
                          height:'auto',
                          borderRadius:5,
                          marginBottom:2,
                          }}>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5">
                             Today Leave Count
                          </Typography>
                        </Box>
                        <Box sx={{
                          margin:2,
                        }}>
                          
                        </Box>
                    </Card>
                </Box>
            </Box>
          </Grid>
        </Grid>
  )
}

export default AdminDashboard;