import * as React from 'react';
import { Card, Divider, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(day, date, In, Out, hours) {
  return { day, date, In, Out, hours };
}

const rows = [
  createData('Fri', '2022/12/09', '08.00', '05.00' ,'0' ),
  createData('Thu', '2022/12/08','08.00', '05.00', '9'),
  createData('Wed', '2022/12/07', '08.00', '05.00', '9'),
  createData('Tue', '2022/12/06', '08.00', '05.00', '9'),
  createData('Mon', '2022/12/05', '08.00', '05:00','9' ),
];

export default function PunchTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>Day</TableCell>
            <TableCell align="center" ><b>Date</b></TableCell>
            <TableCell align="center"><b>In</b></TableCell>
            <TableCell align="center"><b>Out</b></TableCell>
            <TableCell align="center"><b>Total Hours</b></TableCell>
                  
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="center" >{row.date}</TableCell>
              <TableCell align="center">{row.In}</TableCell>
              <TableCell align="center">{row.Out}</TableCell>
              <TableCell align="center">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
