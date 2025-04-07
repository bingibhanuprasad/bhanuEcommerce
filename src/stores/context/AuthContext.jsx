import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("loggedInUser") ? true : false; 
  });

  useEffect(() => {
    
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);


  const login = (user) => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setIsLoggedIn(true);
  };
  

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
