import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';
import Image from '../../images/dash1.jpg';
import BarChart from './BarChart';
import { BiAlarm } from "react-icons/bi";
import { FcAlarmClock } from "react-icons/fc";
import Button from '@mui/material/Button';

const PunchTime = () => {
  return (
        <Grid container sx={{ height:'auto' }}>
          <UserSideBar/>
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
                     Punch Time
                  </Typography>
                 
                </Box>
                <Divider sx={{backgroundColor:"grey"}} />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                }}>
                   
                    
                    <Card sx={{
                          width: '75%',
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
                          <Typography color="green" align="center" component="h1" variant="h5">
                            Time
                          </Typography>
                        </Box>
                        <Divider sx={{backgroundColor:"grey"}} />
                        <Box sx={{
                          marginTop:2,
                          marginLeft:2,
                          textAlign:'left' 
                        }}>
                          <Typography color="green" align="center" component="h1" variant="h5">
                             09 : 53 : 12
                          </Typography>
                        </Box>
                        
                        <Box sx={{
                         
                          marginLeft:2,
                          textAlign:'center' 
                        }}> <Typography component="clock"  sx={{
                            fontWeight:'bold',
                            color:'green',
                            fontSize:200,
                            align:'center',
                            }}>
                             <BiAlarm />
                          </Typography>
                          
                        </Box>
                        <Box sx={{
                          
                          marginLeft:2,
                           
                        }}>
                            
                             <Button
                             
                            paddingBottom="4.5"
                            type="submit"
                            Width="flex"
                            align="top"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                                Punch In
                                 </Button>
                          
                         
                        </Box>
                    </Card>
                </Box>
            </Box>
          </Grid>
        </Grid>
  )
}

export default PunchTime;