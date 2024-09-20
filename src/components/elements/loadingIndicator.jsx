import { Spinner } from "@nextui-org/react";

const LoadingIndicator = ({loading,title=""}) => {
    return ( 
        <div
        className="flex gap-2 items-center"
        >
            <h2
            className="text-xl font-bold"
            >{title}</h2>
            {loading && <Spinner
            size="sm"
            /> }
        </div>
     );
}
 
export default LoadingIndicator;