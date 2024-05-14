import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  ruc: number,
  name: string
) {
  return { ruc, name };
}

const rows = [
  createData(1828383121, 'Nombre 1'),
  createData(1828383121, 'Nombre 2'),
  createData(1828383121, 'Nombre 3'),
];

export default function TableBusqueda() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="caption table">
        <caption>Últimos procesos</caption>
        <TableHead style={{background:"#1B3E85"}}>
          <TableRow style={{height:'20px'}}>
            <TableCell style={{color:'#ffffff'}}>RUC </TableCell>
            <TableCell style={{color:'#ffffff'}} align="right">Nombre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell component="th" scope="row">
                {row.ruc}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
