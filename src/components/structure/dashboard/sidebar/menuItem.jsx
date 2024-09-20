import { useNavigate } from "react-router-dom";

const MenuItem = ({Lucide,itemName,path=""}) => {
    const navigate = useNavigate();
    return ( 
        <div
        onClick={()=>navigate(path)}
        className="w-full flex gap-2 items-center cursor-pointer hover:bg-foreground-200 p-2 rounded-lg"
        >
            <Lucide 
            size="24"
            />
            <p
            className="text-sm font-bold"
            >{itemName}</p>
        </div>
     );
}
 
export default MenuItem;