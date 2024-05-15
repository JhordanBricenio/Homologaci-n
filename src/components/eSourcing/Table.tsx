import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Radio, Rating } from "@mui/material";

function createData(ruc: number, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData(1828383121, "Nombre 1", "hhh"),
  createData(1828383121, "Nombre 2", "h"),
  createData(1828383121, "Nombre 3", "hh"),
];

export default function TableBusqueda() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="caption table">
        <caption>Últimos procesos</caption>
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff", width: "20px" }}></TableCell>
            <TableCell style={{ color: "#ffffff" }}>RAZON SOCIAL </TableCell>
            <TableCell style={{ color: "#ffffff" }}>RUC</TableCell>
            <TableCell style={{ color: "#ffffff" }}>HOMOL</TableCell>
            <TableCell style={{ color: "#ffffff" }}>EVAL.SERV.</TableCell>
            <TableCell style={{ color: "#ffffff" }}>REFERENCIA EXT.</TableCell>
            <TableCell style={{ color: "#ffffff" }}>VER CAT.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell component="th" scope="row">
                {/* Añadir un checkbox */}
                <input type="checkbox" />
              </TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell>{row.ruc}</TableCell>
              <TableCell>
                {/* Checkbox circular */}
                <Radio color="success" />
              </TableCell>
              <TableCell>
                <Rating name="read-only" defaultValue={2.5} />
              </TableCell>
              <TableCell>
                <Rating name="read-only" value={2.5} precision={0.5} />
              </TableCell>

              <TableCell>
                <a className="text-blue-500 underline" href="">
                  Ver showcase
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
