import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTaskDetail, setShowTaskDetail] = useState("New-Task");
  const [login, setLogin] = useState(false);
  const [loggedEmail, setLoggedEmail] = useState("");

  const [empIdCount, setEmpIdCount] = useState(6);
  const [taskIdCount, setTaskIdCount] = useState(120);

  // task counters (optional usage)
  let failedCount = 0;
  let activeTaskCount = 0;
  let completedCount = 0;
  let newTaskCount = 0;

  // 🔥 SINGLE SOURCE OF TRUTH (ONLY ONE useEffect)
  useEffect(() => {
    // logged user
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (storedUser) {
      setLogin(true);
      setLoggedEmail(storedUser.email);
      setIsAdmin(storedUser.role === "admin");
    }

    // initialize localStorage if empty
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }

    // get data from localStorage
    const { employees, admin } = getLocalStorage();

    // 🔥 NORMALIZE EMPLOYEES (MOST IMPORTANT FIX)
    const normalizedEmployees = employees.map((emp) => ({
      ...emp,
      tasks: emp.tasks || [], // ✅ guarantee tasks array
    }));

    setAuthData({
      employees: normalizedEmployees,
      admin,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,

        isAdmin,
        setIsAdmin,

        email,
        setEmail,
        password,
        setPassword,

        showTaskDetail,
        setShowTaskDetail,

        loggedEmail,
        setLoggedEmail,

        login,
        setLogin,

        failedCount,
        newTaskCount,
        completedCount,
        activeTaskCount,

        empIdCount,
        setEmpIdCount,

        taskIdCount,
        setTaskIdCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
