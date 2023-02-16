import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, FormControl } from '@mui/material';
import {Container, createTheme, Divider, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import {Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import DatePick from './DatePick';
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

function createData(Leave_ID, Leave_Type, Subject, Status) {
  return { Leave_ID, Leave_Type, Subject, Status };
}

const rows = [
  createData('Froz', 159, 6.0, 24),
  createData('Ice ', 237, 9.0, 37),
  createData('Ecla', 262, 16.0, 24),
  createData('Cupca', 305, 3.7, 67),
  createData('Ginge', 356, 16.0, 49),
];

const UserTimeCardTable = () => {
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
                             Punch Time Recordings
                          </Typography>
                        </ThemeProvider>
                               <div />
                               <Button
                            href='/user/leaverequests/leaverequestform'
                            type="submit" 
                            align="right" variant="outlined" color="error">
                              Print PDF
                            </Button>
                        
                          </Toolbar>
                          <Divider/>
                          <Box sx={{
                           marginTop:2,
                           marginLeft:0,}}>
                            <Toolbar >
                       <FormControl>
                                <DatePick/>
                            </FormControl>
                       </Toolbar>
                           </Box>
                       
                        </Box>
                      
                        <Box sx={{
                            margin:2,
                          }}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Day</StyledTableCell>
            <StyledTableCell  align="left">Date</StyledTableCell>
            <StyledTableCell align="center">In</StyledTableCell>
            <StyledTableCell  align="center">Out</StyledTableCell>
            <StyledTableCell align="center">Total Hours</StyledTableCell>
          </TableRow>
        </TableHead>
        <ThemeProvider theme={theme}>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Leave_ID}>
              <StyledTableCell >
                {row.Leave_ID}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell align="center">{row.Leave_Type}</StyledTableCell>
              <StyledTableCell align="center">
              <Typography color='primary'  sx={{
                           
                          fontFamily: 'BlinkMacSystemFont',
                          }}>
                            {row.Status}
                          </Typography></StyledTableCell>
              <StyledTableCell align="center">
              <Button variant="outlined" color="primary">
                 View
              </Button>
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

export default UserTimeCardTable;
