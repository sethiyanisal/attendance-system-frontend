import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Card, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import leaveRequestService from '../../routes/leaveRequestServiceRoutes';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import UserService from '../../routes/userServiceRoutes';
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



const AdminManageLeaves = () => {
  const { auth } = useAuthContext();
  const [userData, setUserData] = useState();
  const [value, setValue] = useState('Accepted');
  useEffect(() => {
    
    const token = auth.user.token;
      UserService
        .getAllUsers(token)
        .then((res) => {
            setUserData(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });      
  }, []);
  
 
  return (
  <>
   
  <Divider/>
  <Box sx={{
                            margin:2,
                          }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Annual Bal.</StyledTableCell>
            <StyledTableCell align="center">Casual Bal.</StyledTableCell>
            <StyledTableCell align="center">Total Used Leaves</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userData?.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="center">{item?.firstName} {item?.lastName}</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">x</StyledTableCell>
              <StyledTableCell align="center">
             
              <Link  to= "/admin/adminleavemanagement/allocation" state= {{id:item._id}} style={{ textDecoration: "none" }} >
              <Button  variant="outlined" color="primary" sx={{
                marginLeft:'5',
              }}>
                 View Details
              </Button>
              </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  </>)
}

export default AdminManageLeaves;
