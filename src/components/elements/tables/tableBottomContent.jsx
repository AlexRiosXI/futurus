import { Pagination } from "@nextui-org/react";

const TableBottomContent = ({
    totalPages,
    filters,
    setFilters,

}) => {
    return ( 
        <div
        className="flex justify-center"
        >
            <Pagination
            showControls
            color="secondary"
            total={totalPages}
            page={filters.page}
            onChange={(page) => setFilters({...filters, page})}
            />
        </div>
     );
}
 
export default TableBottomContent;