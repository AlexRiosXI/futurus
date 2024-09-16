import { useState } from "react";
import NavBar from "./navbar/navbar";
import SideBar from "./sidebar/sidebar";

const Dashboard = () => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
    return ( 
        <section
        className="dark text-foreground bg-background flex h-screen max-w-screen max-h-screen overflow-hidden"
        >
            <SideBar
            sideBarIsOpen={sideBarIsOpen}
            />
            <div className="grow">
                <NavBar 
                setSideBarIsOpen={setSideBarIsOpen}
                />
                <section
                className="w-full bg-foreground-50 p-2 h-full"
                > contenido</section>
            
            </div>
        </section>
     );
}
 
export default Dashboard;