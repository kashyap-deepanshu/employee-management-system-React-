import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"))

      if(storedUser){
      setLogin(true)
      setLoggedEmail(storedUser.email);
      storedUser.role==='admin'?setIsAdmin(true):setIsAdmin(false)
    }    
  }, [])
  
  const { authData, isAdmin, setIsAdmin,login ,setLogin ,loggedEmail,setLoggedEmail } = useContext(AuthContext) || {};
  // localStorage.clear()
  // console.log(authData);
  // setLocalStorage()

  const handleLogin = (email, password) => {
    if (isAdmin) {
      const adminUser = authData?.admin?.find(
        (e) => e.email === email && e.password === password
      );

      if (adminUser) {
        localStorage.setItem("loggedUser",JSON.stringify({email, role:"admin"}))
        setLoggedEmail(email);
        setLogin(true);
      } else {
        alert("Invalid Credentials");
      }
    } else {
      const employeeUser = authData?.employees?.find(
        (e) => e.email === email && e.password === password
      );
      if (employeeUser) {
        localStorage.setItem("loggedUser",JSON.stringify({email, role:"employee"}))
        setLoggedEmail(email);
        setLogin(true);
        
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div className="h-screen w-screen font-sans text-gray-800 te">
      {!login ? <Login handleLogin={handleLogin} /> :( isAdmin ? <AdminDashboard loggedEmail={loggedEmail} /> :<EmployeeDashboard loggedEmail={loggedEmail} /> ) }
    </div>
  );
};

export default App;
