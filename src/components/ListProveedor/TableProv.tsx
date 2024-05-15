import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Radio, Rating } from "@mui/material";

function createData(ruc: string, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData("Proveedor 1", "Nombre 1", "hhh"),
  createData("Proveedor 2", "Nombre 2", "h"),
  createData("Proveedor 3", "Nombre 3", "hh"),
  createData("Proveedor 4", "Nombre 3", "hh"),
  createData("Proveedor 5", "Nombre 3", "hh"),
  createData("Proveedor 6", "Nombre 3", "hh"),
  createData("Proveedor 7", "Nombre 3", "hh"),
];

export default function TableProv() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow>
            <TableCell style={{ color: "#ffffff" }}>
              Otros compradores
            </TableCell>
            <TableCell style={{ color: "#ffffff" }}>
              Ponderado interno
            </TableCell>
            <TableCell style={{ color: "#ffffff" }}>Razón Social</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Homologación</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Vencimiento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell className="items-center" component="th" scope="row">
                <Radio color="success" />
              </TableCell>
              <TableCell>
                <Rating name="read-only" value={2.5} precision={0.5} />
              </TableCell>
              <TableCell>
                <a className="text-blue-400 underline" href="">
                  {row.ruc}
                </a>
              </TableCell>
              <TableCell>
                <Radio color="success" />
              </TableCell>
              <TableCell>
                <a href=""> 04/19/2020</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
