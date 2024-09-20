import { useEffect } from "react";

const PasswordValidator = ({password}) => {

    useEffect(() => {
        console.log(password.value)
    }
    ), [password.value]
    return ( 
        <div>
            <p>{password.value}</p>
        </div>
     );
}
 
export default PasswordValidator;