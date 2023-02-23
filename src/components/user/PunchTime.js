import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';
import { BiAlarm } from "react-icons/bi";
import Button from '@mui/material/Button';

import {useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import TimePunchService from '../../routes/timePunchServiceRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { punchInStatus, punchOutStatus } from '../../redux/timePunch';


const PunchTime = () => {

  const { auth } = useAuthContext();

  const [date, setDate] = useState(new Date());


//  const {isPunched} = useSelector((state) => state.timepunch);
//  const dispatch = useDispatch();

const isPunched = JSON.parse(localStorage.getItem('isPunched'));

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  

  function tick() {
    setDate(new Date());
  }

  const handleSubmitPunchIn = async (e) => {
    e.preventDefault();
    try {
        const token = auth.user.token;

        let timecard = {
          dateIn: Date().toLocaleString(),
          dateOut: null,
      };   

        TimePunchService
            .createTimeCard(timecard, token)
            .then((res) => {
            localStorage.setItem('isPunched', true);
            console.log("Successfully added a Time card");
            })
            .catch((error) => {
            console.log(error);
            });
        
    } catch (err) {
        console.log(err) ;
    }
}

const handleSubmitPunchOut = async (e) => {
  e.preventDefault();

  let timecard = {
    dateOut: Date().toLocaleString(),
  };   

  try {
      const token = auth.user.token;
      const userID = auth.user.id;

      TimePunchService
          .completeTimeCard(timecard, token, userID)
          .then((res) => {
          localStorage.setItem('isPunched', false);
          console.log("Successfully added a Time card");
          })
          .catch((error) => {
          console.log(error);
          });
      
  } catch (err) {
      console.log(err) ;
  }
}

  return (
        <>
          <Box sx={{
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
                        <Typography sx={{
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
                          {(isPunched === false) ? <Button
                            type="submit"
                            onClick={handleSubmitPunchIn}
                            variant="outlined"
                            sx={{ mt: 3, mb: 3, width:200, borderRadius:15,  color: 'black', borderColor: 'black',
                            '&:hover': {
                              backgroundColor: '#DCDCDC',
                              color: 'balck',
                              borderColor:'black'
                          },   
                          }}>
                              Punch In
                          </Button> :

                          <Button
                          type="submit"
                          onClick={handleSubmitPunchOut}
                          variant="outlined"
                          sx={{ mt: 3, mb: 3, width:200, borderRadius:15,  color: 'black', borderColor: 'black',
                          '&:hover': {
                            backgroundColor: '#DCDCDC',
                            color: 'balck',
                            borderColor:'black'
                          },   
                          }}>
                            Punch Out
                          </Button>
                          }
                        </Box>
                    </Card>
                  </Box>
        </>
  )
}

export default PunchTime;