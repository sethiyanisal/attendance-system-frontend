import React from 'react';
import { Card, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Unauthorized = () => {
  return (
    <Box sx={{
        minHeight:'100vh',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        margin:'auto',
      }}>
        <Card sx={{
            width:'auto',
            height:'auto',
            borderRadius:5,
            backgroundColor:'#F4F4F4'
            }}>
                <Box sx={{
                        margin:20,
                        marginTop:10,
                        marginBottom:10,
                        textAlign:'center'
                        }}>
                        <Typography sx={{
                            fontWeight:'bold',
                            color:'#060E37',
                            fontSize:40,
                            align:'center',
                            }}>
                            403
                        </Typography>
                        <Typography sx={{
                            fontWeight:'bold',
                            color:'#060E37',
                            fontSize:40,
                            align:'center',
                            }}>
                            Unauthorized Access
                        </Typography>

                        <Typography sx={{
                            fontWeight:'semi-bold',
                            color:'#060E37',
                            fontSize:20,
                            align:'center',
                            }}>
                            <Link to="/">Go to home page</Link>
                        </Typography>
                </Box>
        </Card>
    </Box>
  )
}

export default Unauthorized