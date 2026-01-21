import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [authData, setAuthData] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showTaskDetail, setShowTaskDetail] = useState('New-Task');
    const [login, setLogin] = useState(false);
    const [loggedEmail, setLoggedEmail] = useState('');
    const [empIdCount, setEmpIdCount] = useState(6)

    let failedCount=0;
    let activeTaskCount=0;
    let completedCount=0;
    let newTaskCount=0;

     useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedUser"))
    
          if(storedUser){
          setLogin(true)
          setLoggedEmail(storedUser.email);
          storedUser.role==='admin'?setIsAdmin(true):setIsAdmin(false)
        }    
      }, [])
    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        setAuthData({ employees, admin });
    }, []);

    return (
        <div>
        <AuthContext.Provider value={
            { 
                authData,setAuthData, isAdmin, setIsAdmin,email,setEmail,password,setPassword,showTaskDetail,setShowTaskDetail ,loggedEmail,setLoggedEmail,login,setLogin,

                failedCount,newTaskCount,completedCount,activeTaskCount,empIdCount,setEmpIdCount
            }}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
