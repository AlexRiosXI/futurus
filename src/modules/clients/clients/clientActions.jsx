import { LucideMessageCircleMore, LucideTrash } from "lucide-react";
import TableActions from "../../../components/elements/tables/tableActions";
import TableActionButton from "../../../components/elements/tables/tableactionButton";

const ClientActions = () => {
    return ( 
        <TableActions>
            <TableActionButton
            color="success"
            tip="Enviar Whatsapp"
            Lucide={LucideMessageCircleMore}/>
            <TableActionButton
            tip="Eliminar Cliente"
            color="danger"
            Lucide={LucideTrash}/>
            
            
            
        </TableActions>
     );
}
 
export default ClientActions;