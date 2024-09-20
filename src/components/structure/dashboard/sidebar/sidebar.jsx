import { LucideAArrowDown, LucideBuilding2, LucideDollarSign, LucideHome, LucideUsers } from "lucide-react";
import MenuItem from "./menuItem";
import { cn } from "@nextui-org/react";
import { AnimatePresence , motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import FuturusLogo from "../../../../assets/logos/isotype_futurus";


const SideBar = ({sideBarIsOpen}) => {
    
    const openSideBarClass = "max-w-[320px] min-w-[250px] "
    const closedSideBarClass = "max-w-[0px]  min-w-[0px] overflow-hidden p-0"
    return ( 
        <article
        className={cn(" h-full w-1/5  gap-2 flex flex-col   p-4 transition-all duration-300 ease-in-out",sideBarIsOpen ? openSideBarClass : closedSideBarClass)}  
        >
            {sideBarIsOpen && <>
            <AnimatePresence>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:0.3, delay:0.2}}
                className="flex flex-col gap-4"

                >
                    <div>
                    <div
                    className="flex gap-2 items-center"
                    >
                    <FuturusLogo
                    className="w-10 h-10"
                    />
            <h1
            className="text-3xl font-bold text-danger"
            >futurus</h1></div>
         
            <h4
            className="text-lg text-foreground-500"
            >Firma Abogados S.A</h4>   </div>
            <div
            
            className="flex flex-col gap-2 mt-4"
            >
                <MenuItem
                Lucide={LucideHome}
                itemName={"Inicio"}
                path="/index"
                />
                <MenuItem 
                Lucide={LucideUsers}
                itemName="Clientes"
                path="clients"
                />
                <MenuItem 
                Lucide={LucideBuilding2}
                itemName="Mi organización"
                path="organization"
                />
                <MenuItem Lucide={LucideDollarSign}
                itemName="Facturación"
                />
            </div>
            </motion.div>
            </AnimatePresence>
            </>}  
        </article>
     );
}
 
export default SideBar;