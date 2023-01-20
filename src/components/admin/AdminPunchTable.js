import * as React from 'react';
import {Button, Card, Divider, Grid } from '@mui/material';
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
      <table className="l-raw-table">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Total Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
            <tr
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <td>
                {row.id}
              </td>
              <td >{row.name}</td>
              <td >{row.date}</td>
              <td >{row.description}</td>
              <td >{row.hours}</td>
              <td > <button className="pf-btn pf-btn-link " type="submit">
                View
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
