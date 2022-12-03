import { Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import UserSideBar from './UserSideBar';
import {Typography} from '@mui/material';

const UserDashboard = () => {
  return (
        <Grid container sx={{ height: '100%' }}>
          <UserSideBar/>
          <Grid item xs={10} sx={{ height: '100%' }}>
            <Box sx={{
                  width:'100%',
                  flexDirection: 'column',
                  borderRight:1,
                  height:'100%',
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
                <Divider variant="middle" sx={{backgroundColor:"grey"}} />
            </Box>
          </Grid>
        </Grid>
  )
}

export default UserDashboard;