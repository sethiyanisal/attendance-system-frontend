import { Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import {Typography} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import PunchTable from '../user/PunchTable';
import DatePick from '../user/DatePick';
import AdminSideBar from './AdminSideBar';
import AdminPunchTable from './AdminPunchTable';


const AdminTimeCard = () => {
   
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
                    Time Card
                  </Typography>
                 
                </Box>
                <Divider sx={{backgroundColor:"grey"}} />
                
                        <Box sx={{
                          float:'right',
                          width:'100%',
                          marginLeft:2,
                          display: 'flex',
                          flexDirection: 'row',
                         
                         
                        }}>
                          
                          <FormControl  
                    sx={{
                      width:'50%',
                      fontWeight:'bold',
                      paddingTop:8,
                      paddingLeft: 4,
                      paddingBottom:4.5,
                      }}>
                     <DatePick/> 
                      
</FormControl>
                           

                 
                 <Typography component="h1" variant="h5" sx={{
                    fontWeight:'bold',
                    paddingTop:6,
                    paddingLeft: 50,
                    paddingBottom:2,
                    float:'right',
                    }}>
                    <Button
                             
                             paddingBottom="4.5"
                             type="submit"
                             Width="flex"
                             float="right"
                             variant="contained"
                             sx={{ mt: 3, mb: 2,backgroundColor:"red" }}>
                                 Print PDF
                                  </Button> 
                                  
                    </Typography>
           
                        </Box>
                        <Box sx={{    paddingBottom:'6',
                          margin:2,
                        }}>
                          <AdminPunchTable/>
                        </Box>
            </Box>
           
          </Grid>
        </Grid>
  )
}

export default AdminTimeCard;