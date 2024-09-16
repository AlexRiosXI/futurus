import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,cn } from "@nextui-org/react";
import { LucideArrowDown, LucideBuilding2, LucideChevronDown, LucideLogOut, LucideUser } from "lucide-react";

const User = () => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    <div className="flex gap-2 items-center">
    <p>Alexander Ríos</p>
    <Dropdown
    className="dark text-foreground"
    >
      <DropdownTrigger>
        <Avatar
        className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownItem
          key="profile"
          
          description="Editar mi información personal"
          startContent={<LucideUser className={iconClasses} />}
        >
          Mi Perfil
        </DropdownItem>
        <DropdownItem
          key="organization"
          
          description="Revisar la información de mi organización"
          startContent={<LucideBuilding2 className={iconClasses} />}
        >
          Mi organización
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          description="Cierra la sesión en este dispositivo"
          startContent={<LucideLogOut className={cn(iconClasses, "text-danger")} />}
        >
          Cerrar Sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
};

export default User;
