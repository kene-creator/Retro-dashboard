import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, outfit, date, status) {
  return {
    name: name,
    calories: calories,
    outfit: outfit,
    date: date,
    status: status
  };
}

const rows = [
  createData(
    'PSG Stadium 20/21',
    'SKU:8600844',
    'Jersey',
    '12.11.2020',
    'Published'
  ),
  createData(
    'Los Angeles Lakers City',
    'SKU:8600847',
    'Jersey',
    '12.11.2020',
    'Published'
  ),
  createData(
    'Miami Heat Courtside',
    'SKU:8600824',
    'Jersey',
    '12.11.2020',
    'Pending'
  ),
  createData(
    'Liverpool FC 20/21 Stadium',
    'SKU:8609824',
    'Outwear',
    '12.11.2020',
    'Published'
  ),
  createData('Gingerbread', 'SKU:86009474', 'Jersey', '12.11.2020', 'Published')
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      className="ml-4 h-[15rem] maindash rounded-md box_shadow"
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="text-gray-500">Latest Added Products</p>
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.outfit}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <span
                  className={
                    row.status === 'Published'
                      ? 'bg-green-100 text-green-500 p-[0.25rem] rounded-lg'
                      : 'bg-red-100 text-red-500 p-[0.25rem] rounded-lg'
                  }
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
