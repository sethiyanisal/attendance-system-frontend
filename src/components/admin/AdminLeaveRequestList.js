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



const AdminLeaveRequestList = () => {
  const { auth } = useAuthContext();
  const [leaveData, setLeave] = useState();
  const [value, setValue] = useState('Accepted');
  useEffect(() => {
    
    const token = auth.user.token;
      leaveRequestService
        .getAllLeaveRequests(token)
        .then((res) => {
          setLeave(res.data);
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        });      
  }, []);
  //Filter leave data
  const filteredData = leaveData?.filter(leave => {
    return leave.status === value;
  });
  console.log(filteredData);
  //handleclick function for tabs to select filter status of the leave data 
  const handleClick = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <>
    <Box sx={{ width: '100%',
     marginLeft:2,
    marginBottom:'2',
    }}>
  <Tabs
  value={value}
  onChange={handleClick}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"

  >
  <Tab value="Accepted" label="Accepted" />
  <Tab value="Pending" label="Pending" />
  <Tab value="Declined" label="Declined" />
  </Tabs>
  </Box>
  <Divider/>
  <Box sx={{
                            margin:2,
                          }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Leave ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Leave Type</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filteredData?.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="center">{item?.postedBy.firstName}</StyledTableCell>
              <StyledTableCell align="center">{item.leavetype}</StyledTableCell>
              <StyledTableCell align="center">{item.status}</StyledTableCell>
              <StyledTableCell align="center">
              <Link to= "/admin/leaverequests/adminviewleave" state= {{id:item._id}} style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary">
                 View
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

export default AdminLeaveRequestList;
