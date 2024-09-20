import { Tooltip } from "@nextui-org/react";

const TableActionButton = ({Lucide, color="foreground",tip=""}) => {
    return ( 
        <Tooltip
        content={tip}
        >
        <div
        className={`cursor-pointer opacity-50 hover:opacity-100 text-${color}`}
        >
        <Lucide/>
        </div>
        </Tooltip>
     );
}
 
export default TableActionButton;