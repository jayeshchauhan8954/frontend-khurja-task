import { createContext, useState } from "react";

let UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        userName: '',
        phone: '',
        password: '',
        accessToken:null
    });

    return (
        <UserContext.Provider value={{data,setData}}>
            {children}
        </UserContext.Provider>
    )
}





export { UserContext, AuthProvider }