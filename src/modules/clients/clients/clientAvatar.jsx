import { Avatar } from "@nextui-org/react";

const ClientAvatar = () => {
    return ( 
        <div
        className="flex items-center gap-2"
        >
            <Avatar/>
            <div>
                <h6
                className="font-bold"
                >Nombre del cliente</h6>
                <p
                className="text-sm text-foreground-500"
                >Correo del cliente</p>
            </div>
        </div>
     );
}
 
export default ClientAvatar;