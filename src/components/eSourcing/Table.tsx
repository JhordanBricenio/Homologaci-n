import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "RazónSocial", headerName: "Razón Social", width: 70 },
  { field: "RUC", headerName: "RUC", width: 130 },
  { field: "HOMOL", headerName: "HOMOL", width: 130 },
  { field: "EvalServ", headerName: "Eval.Serv.", type: "number", width: 90 },
  {field: "VerCatálogo",headerName: "Ver Catálogo", width: 160 },
];

const rows = [
  { id: 1, RazónSocial: "Proveedor 1", RUC: "0922828111", EvalServ: 35 ,VerCatálogo: "Ver Catálogo"},
  { id: 2, RazónSocial: "Proveedor 2", RUC: "0922828111", EvalServ: 42 ,VerCatálogo: "Ver Catálogo"},
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, RazónSocial: "Proveedor 3", RUC: "0922828111", EvalServ: 16 ,VerCatálogo: "Ver Catálogo"},
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, RazónSocial: "Proveedor 4", RUC: "0922828111", EvalServ: 44 ,VerCatálogo: "Ver Catálogo"},
  { id: 8, RazónSocial: "Proveedor 5", RUC: "0922828111", EvalServ: 36,VerCatálogo: "Ver Catálogo"},
  { id: 9, RazónSocial: "Proveedor 6", RUC: "0922828111", EvalServ: 65 ,VerCatálogo: "Ver Catálogo"},
];

export default function Table() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
