import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';
import { BiAlarm } from "react-icons/bi";
import Button from '@mui/material/Button';
import {useEffect, useState } from 'react';


const PunchTime = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <>
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
        <Card sx={{
                            width: 500,
                            height:'auto',
                            borderRadius:5,
                            }}>
                          <Box sx={{
                            marginTop:2,
                            textAlign:'center'
                          }}>
                            <Typography sx={{
                              fontWeight:'bold',
                              color:'green',
                              fontSize:30,
                              align:'center',
                              }}>
                                {date.toLocaleTimeString()}
                            </Typography>
                          </Box>

                          <Box sx={{
                            marginTop:2,
                            textAlign:'center'
                          }}>
                            <Typography sx={{
                              fontWeight:'bold',
                              color:'black',
                              fontSize:16,
                              align:'center',
                              }}>
                                {date.toLocaleDateString()}
                            </Typography>
                          </Box>
                          
                          <Box sx={{
                            marginTop:8,
                            textAlign:'center' 
                          }}> 
                          <Typography component="clock"  sx={{
                              fontWeight:'bold',
                              color:'#4D2500',
                              fontSize:100,
                              align:'center',
                              }}>
                              <BiAlarm />
                          </Typography>
                            
                          </Box>
                          <Box sx={{
                            marginBottom:4,
                          }}>
                          <Button
                            type="submit"
                            variant="outlined"
                            sx={{ mt: 3, mb: 3, width:200, borderRadius:15,  color: 'black', borderColor: 'black',
                            '&:hover': {
                              backgroundColor: '#DCDCDC',
                              color: 'balck',
                              borderColor:'black'
                          },   
                          }}>
                              Punch In
                          </Button>
                          </Box>
                      </Card>
       </Box>

   
       
       
        
    </>
  )
}

export default PunchTime;