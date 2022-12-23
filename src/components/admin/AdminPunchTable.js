import * as React from 'react';
import { Card, Divider, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name , date, description, hours ) {
  return { id, name ,date, description, hours };
}

const rows = [
  createData('#01', 'Cahndler', '2022/12/09', '08.00', '05.00'  ),
  createData('#02', 'Jhone', '2022/12/08','08.00', '05.00'),
  createData('#03', 'Gihan','2022/12/07', '08.00', '05.00'),
  createData('#04','Sethiya', '2022/12/06', '08.00', '05.00'),
  createData('#05', 'Thilina','2022/12/05', '08.00', '05:00' ),
];

export default function AdminPunchTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="center"><b>ID</b></TableCell>
            <TableCell align="center" ><b>Name</b></TableCell>
            <TableCell align="center"><b>Date</b></TableCell>
            <TableCell align="center"><b>Description</b></TableCell>
            <TableCell align="center"><b>Total Hours</b></TableCell>
            <TableCell align="center"><b> </b></TableCell>    
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center" >{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.hours}</TableCell>
              <TableCell align="center"> 
              <Button
                  href='/user/leaverequests/leaverequestform'
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 4, mr: 6, width:200, borderRadius:10,  color: 'white', backgroundColor:'#FB5353', borderColor: 'black',
                    '&:hover': {
                      backgroundColor: '#FF7D7D',
                      color: 'white',
                      borderColor:'black'
                  },   
                  }}
                  >
                    Request Leave
                  </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
