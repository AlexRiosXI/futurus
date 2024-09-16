const MenuItem = ({Lucide,itemName}) => {
    return ( 
        <div
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