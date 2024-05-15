import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Rating } from "@mui/material";
function createData(ruc: number, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData(1828383121, "Variable S1", "hhh"),
  createData(1828383121, "Variable S2", "h"),
  createData(1828383121, "Variable S3", "hh"),
  createData(1828383121, "Variable S4", "hh"),
  createData(1828383121, "Variable S5", "hh"),
  createData(1828383121, "Variable S6", "hh"),
];

export default function TableProv() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="caption table">
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff" }}>N° Compra</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Descripción </TableCell>
            <TableCell style={{ color: "#ffffff" }}>Fecha</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Valoración</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell component="th" scope="row">
              <a className="text-blue-400 underline" href="">123445</a>
              </TableCell>       
              <TableCell>Lorem ipsum dolor sit.</TableCell>              
              
              <TableCell>
                01/01/2021
              </TableCell>
              {/* Necesito 3 radios con label pero que se ubiqquen de manera horizontal */}
              <TableCell>
              <Rating name="read-only" value={5} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
