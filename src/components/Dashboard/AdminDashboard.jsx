import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../others/Header";
import Sidebar from "../../others/Sidebar";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ loggedEmail }) => {
  const { authData } = useContext(AuthContext);
  const user = authData?.admin?.find((e) => e.email === loggedEmail);

  if (!user) {
    return (
      <div className="h-screen w-screen bg-emerald-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Header firstName={user.firstName || "Admin"} />

      <div className="flex h-[85vh] w-full">
        <Sidebar />

        {/* 🔥 THIS IS REQUIRED */}
        <div className="w-[80%] overflow-y-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
