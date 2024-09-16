import { LucideMenu } from "lucide-react";
import User from "./user";

const NavBar = ({setSideBarIsOpen}) => {
    return ( 
        <nav className="p-3 flex justify-between items.center">
            <h5
            className="text-2xl font-bold"
            >
            <div
            onClick={()=>setSideBarIsOpen((prev)=>!prev)}
            >
                <LucideMenu
                 size="32" className="cursor-pointer hover:text-foreground-800"/>
            </div>
            </h5>
            <User/>
        </nav>
        
     );
}
 
export default NavBar;