import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import AdminSideBar from './AdminSideBar';
import {Typography} from '@mui/material';
import { BiAlarm } from "react-icons/bi";
import Button from '@mui/material/Button';
import {useEffect, useState } from 'react';


const AdminPunchTime = () => {

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
    <AdminSideBar/>
    <div className="l-app__body">
      <header className="l-header">
                <div className="l-header__wrapper">
                    <h4 className="heading-4">Punch Time</h4>
                </div>
                
      </header>
      <div className="l-page">
        <div align="center" className="container-fluid">
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
        </div>
      </div>
    </div>
        
    </>
  )
}

export default AdminPunchTime;