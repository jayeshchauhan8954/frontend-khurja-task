import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [data, setData] = useState({
        email: "",
        name: "",
        phone: "",
        userName: "",
        userType: "",
      });

  const updateStateValue = (newValue) => {
    setData((prev) => ({ ...prev, ...newValue }));
  };

  return (
    <UserContext.Provider value={{ userData:data, updateStateValue }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider,UserContext}