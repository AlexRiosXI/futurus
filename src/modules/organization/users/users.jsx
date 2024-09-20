import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import TableActions from "../../../components/elements/tables/tableActions";
import TableActionButton from "../../../components/elements/tables/tableactionButton";
import { LucideEdit, LucideTrash } from "lucide-react";
import TableTopContent from "../../../components/elements/tableTopContent";

const Users = () => {
  return (
    <Table
    className="mt-2"
    topContent={
        <TableTopContent
        title={"Usuarios"}
        button={"Agregar Usuario"}
        buttonOnClick={() => console.log("Agregar Usuario")}
        loading={false}
        />
    }
    
    >
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Rol</TableColumn>
        <TableColumn>Cargo</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Juan Perez</TableCell>
          <TableCell>correo@correo.components</TableCell>
          <TableCell>Agente</TableCell>
          <TableCell>Abogado</TableCell>
          <TableCell>
            <TableActions>
              <TableActionButton
                Lucide={LucideEdit}
                onClick={() => console.log("Edit")}
                tip="Editar"
              />
                <TableActionButton
                Lucide={LucideTrash}
                onClick={() => console.log("Edit")}
                tip="Eliminar"
                color="danger"
              />
             
            </TableActions>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Users;
