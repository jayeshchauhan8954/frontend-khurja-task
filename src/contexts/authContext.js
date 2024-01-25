import { createContext, useState } from "react";

let UserContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        userName: '',
        phone: '',
        password: ''
    });

<<<<<<< HEAD
  const updateStateValue = (newValue) => {
    setData((prev) => ({ ...prev, ...newValue }));
  };
 
  return (
    <UserContext.Provider value={{ userData:data, updateStateValue }}>
      {children}
    </UserContext.Provider>
  );
};
=======
    return (
        <UserContext.Provider value={{data,setData}}>
            {children}
        </UserContext.Provider>
    )
}

>>>>>>> 9245d378fd1d51feab220f2349deb9d0806b1013




export { UserContext, AuthProvider }