import { LucideMenu } from "lucide-react";
import User from "./user";
import NightModeSwitch from "./darkMode/darkMode";
import { useEffect } from "react";
import { supabase } from "../../../../lib/helper/supabaseClient";
import { get } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const NavBar = ({setSideBarIsOpen}) => {
    const navigate = useNavigate()


    const getUserName = async () => {
        let { data, error } = await supabase
        .from('user_profiles')
        .select('prefered_name')

        console.log(data)
        console.log(error)
    }

  
    return ( 
        <nav className="p-3 flex justify-between items.center border-b border-foreground-200">
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
            <div
            className="flex gap-4 items-center"
            >
            <NightModeSwitch/>
            <User/>
            </div>
        </nav>
        
     );
}
 
export default NavBar;