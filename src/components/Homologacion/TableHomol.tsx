import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import AttachFileIcon from "@mui/icons-material/AttachFile";

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
  createData(1828383121, "Variable S7", "hh"),
  createData(1828383121, "Variable S8", "hh"),
];

export default function TableHomol() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="caption table">
        <caption>Últimos procesos</caption>
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff" }}>Activar</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Recaba Adjuntos </TableCell>
            <TableCell style={{ color: "#ffffff" }}>Predefinidas</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Vencimiento</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Descripción</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Factor</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Área Responsable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell component="th" scope="row">
                {/* Añadir un checkbox */}
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <AttachFileIcon />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <a className="text-blue-400 underline" href="">
                  1 año
                </a>
              </TableCell>
              <TableCell>Lorem ipsum dolor sit.</TableCell>
              <TableCell>
                <div className="w-4 h-4 bg-blue-500 flex justify-center items-center">
                  <p className="text-white text-sm font-bold">1</p>
                </div>
              </TableCell>
              {/* Necesito 3 radios con label pero que se ubiqquen de manera horizontal */}
              <TableCell>
                <input  type="radio" />
                <label className="mr-3" htmlFor="">Área 1</label>

                <input type="radio" />
                <label className="mr-3" htmlFor="">Área 2</label>

                <input type="radio" />
                <label className="mr-3" htmlFor="">Área 3</label>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
