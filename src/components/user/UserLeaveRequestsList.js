import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card } from '@mui/material';
import {Container, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const theme = createTheme({
  
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffcf33',
        main: '#ffc400',
        dark: '#b28900',
        contrastText: '#fff',
      },
    },

  typography: {
    textAlign:'right',
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#2E3B55',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const UserLeaveRequestList = () => {
  const { auth } = useAuthContext();
  const [leaveData, setLeave] = useState();

  useEffect(() => {
    const userID = auth.user.id;
    const token = auth.user.token;
      leaveRequestService
        .getLeaveRequestsById(userID, token)
        .then((res) => {
          setLeave(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);
  return (
    <>
    <Grid container spacing={2}>
  
  <Grid item  md={12} xs={12}>
  <Card sx={{
                            height:'auto',
                            borderRadius:5,
                            marginBottom:2,
                            }}>
                              <Container>
                              <Box sx={{
                           marginTop:2,
                           marginLeft:2,
                           
                          
                        }}>
                          <Toolbar sx={{ justifyContent: "space-between" }}>
                          <ThemeProvider theme={theme}>
                          <Typography component="h1" variant="h5" sx={{
                            
                            textAlign:'left',
                            alignItems:'right',
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                             Leave Request
                          </Typography>
                        </ThemeProvider>
                               <div />
                               <Button
                            href='/user/leaverequests/leaverequestform'
                            type="submit" 
                            align="right" variant="outlined" color="error">
                              Request Leave
                            </Button>
                          </Toolbar>
                       
                        </Box>
                        <Divider/>
                        <Box sx={{
                            margin:2,
                          }}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Leave ID</StyledTableCell>
            <StyledTableCell  align="left">Leave Type</StyledTableCell>
            <StyledTableCell align="left">Subject</StyledTableCell>
            <StyledTableCell color= "#cddc39" align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <ThemeProvider theme={theme}>
        <TableBody>
          {leaveData?.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="left">{item.leavetype}</StyledTableCell>
              <StyledTableCell align="left">{item.subject}</StyledTableCell>
              <StyledTableCell align="left">
              <Typography color='primary'  sx={{
                           
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                            {item.status}
                          </Typography></StyledTableCell>
              <StyledTableCell align="left">
              <Link to= "/user/leaverequest/userviewleave" state= {{id:item._id}} style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary">
                 View
              </Button>
              </Link>
             
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </ThemeProvider>
        
      </Table>
    </TableContainer>
                          </Box>
                              </Container>
                        
                          
                      </Card>
  </Grid>
  
</Grid>
    </>
    
    
  )
}

export default UserLeaveRequestList;
