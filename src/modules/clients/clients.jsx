import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import TableTopContent from "../../components/elements/tableTopContent";
import ClientAvatar from "./clients/clientAvatar";
import ClientActions from "./clients/clientActions";
import { useState } from "react";
import TableBottomContent from "../../components/elements/tables/tableBottomContent";

const Clients = () => {
    const [totalPages, setTotalPages] = useState(1)
    const [filters, setFilters] = useState({
        page: 1,
        search: ""
    })
  return (
    <div>
      <Table
      isStriped
      topContent={
        <TableTopContent
        title={"Clientes"}
        button={"Agregar Cliente"}
        />
      }
      bottomContent={
        <TableBottomContent
        filters={filters}
        setFilters={setFilters}
        totalPages={totalPages}
        />
      }
      >
        <TableHeader>
          <TableColumn>Cliente</TableColumn>
          <TableColumn>Correo</TableColumn>
          <TableColumn>Telefono</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No hay clientes registrados">
          <TableRow>
            <TableCell>
                <ClientAvatar />
            </TableCell>
            <TableCell> correo 1</TableCell>
            <TableCell>telefono 1</TableCell>
            <TableCell>
                <ClientActions />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Clients;
