import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Login from "../components/Auth/Login";
import AdminDashboard from "../components/Dashboard/AdminDashboard";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";

import Dashboard from "../components/admin/Dashboard";
import CreateTask from "../components/admin/CreateTask";
import AddEmployee from "../components/admin/AddEmployee";
import ShowTask from "../components/admin/ShowTask";
import ShowEmployee from "../components/admin/ShowEmployee";

import { AuthContext } from "../context/AuthProvider";

const AppRoutes = () => {
  const { login, isAdmin, loggedEmail } = useContext(AuthContext);

  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route
        path="/login"
        element={
          !login ? (
            <Login />
          ) : isAdmin ? (
            <Navigate to="/admin/dashboard" />
          ) : (
            <Navigate to="/employee/dashboard" />
          )
        }
      />

      {/* ADMIN (LAYOUT + NESTED ROUTES) */}
      <Route
        path="/admin"
        element={
          login && isAdmin ? (
            <AdminDashboard loggedEmail={loggedEmail} />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-task" element={<CreateTask />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="show-task" element={<ShowTask />} />
        <Route path="show-employee" element={<ShowEmployee />} />
      </Route>

      {/* EMPLOYEE */}
      <Route
        path="/employee/dashboard"
        element={
          login && !isAdmin ? (
            <EmployeeDashboard loggedEmail={loggedEmail} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
