import { LucideAArrowDown, LucideDollarSign, LucideUsers } from "lucide-react";
import MenuItem from "./menuItem";
import { cn } from "@nextui-org/react";
import { AnimatePresence , motion} from "framer-motion";

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
            <h1
            className="text-3xl font-bold text-danger"
            >futurus</h1>
            <h4
            className="text-lg text-foreground-500"
            >Firma Abogados S.A</h4>
            <div
            
            className="flex flex-col gap-2 mt-4"
            >
                <MenuItem 
                Lucide={LucideUsers}
                itemName="Mi organización"
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