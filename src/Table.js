import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({ data, cart, setCart }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = async (row) => {
    let variant = 'success';
    enqueueSnackbar('Item Added to Cart', { variant });
    setCart([...cart, row]);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Classification</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Riskmeter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.classification}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.riskmeter}</TableCell>
              <TableCell align="right">
                <Button variant="contained" onClick={() => handleClick(row)}>
                  Invest Now
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
