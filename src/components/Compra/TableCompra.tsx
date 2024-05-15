import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Radio } from "@mui/material";

import AttachFileIcon from "@mui/icons-material/AttachFile";

function createData(ruc: string, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData("Variable 1", "Nombre 1", "hhh"),
  createData("Variable 2", "Nombre 2", "h"),
];

export default function TableCompra() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff" }}>Variables </TableCell>
            <TableCell style={{ color: "#ffffff" }}>Homologación</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Descripción</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Variable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell>{row.ruc}</TableCell>
              <TableCell>
                <Radio color="success" />
              </TableCell>
              <TableCell>Lorem ipsum dolor.</TableCell>
              <TableCell>
                <AttachFileIcon />
                <a className="text-blue-400 underline" href="">Revisa archivo Adjunto</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
