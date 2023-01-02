import React from 'react';
import { Button, Card, Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import AdminLeaveRequestCard from './AdminLeaveRequestCard';
import AdminSideBar from './AdminSideBar';


const AdminLeaveRequestList = () => {
  return (
    <>
      <Box sx={{
      }}>
        <Grid container sx={{ height:'full' }}>
          <AdminSideBar/>
          <Grid item xs={10} sx={{ height: 1, mb:2}}>
            <Box sx={{
                  width:1,
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
                      Leave Requests
                  </Typography>
                </Box>
                <Divider sx={{backgroundColor:"grey"}} />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap:'wrap',
                }}>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  flexWrap:'wrap',
                }}>
                  <Button
                  href='#'
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 4, mr: 15, width:200, borderRadius:10,  color: 'white', backgroundColor:'#FB5353', borderColor: 'black',
                    '&:hover': {
                      backgroundColor: '#FF7D7D',
                      color: 'white',
                      borderColor:'black'
                  },   
                  }}
                  >
                    Print PDF
                  </Button>
                </Box>
                
                <Card sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: 1100,
                          marginTop: 6,
                          marginLeft: 8,
                          height:'auto',
                          marginBottom:2,
                          backgroundColor:'#BDBDBD'
                          }}>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:2,
                          marginBottom:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             Leave ID
                          </Typography>
                        </Box>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:8,
                          marginBottom:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             Name
                          </Typography>
                        </Box>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:16,
                          marginBottom:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             Leave Type
                          </Typography>
                        </Box>
                        <Box sx={{
                          marginTop:2,
                          marginLeft:20,
                          marginBottom:2,
                          textAlign:'left' 
                        }}>
                          <Typography component="h1" variant="h5" style={{
                            fontSize: 16,
                        }}>
                             Subject
                          </Typography>
                        </Box>
                    </Card>
                    <AdminLeaveRequestCard/>
                    <AdminLeaveRequestCard/>
                      
            </Box>
          </Grid>
        </Grid>
        </Box>
    </>
  )
}

export default AdminLeaveRequestList;