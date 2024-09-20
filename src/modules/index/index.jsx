import useApp from "../../appContext/useApp";

const Index = () => {
    const {userId} = useApp();
    return ( 
        <div>
            {userId}
        </div>
     );
}
 
export default Index;