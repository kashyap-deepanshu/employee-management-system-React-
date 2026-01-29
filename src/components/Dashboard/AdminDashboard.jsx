import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../others/Header";
import Sidebar from "../../others/Sidebar";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ loggedEmail }) => {
  const { authData } = useContext(AuthContext);
  const user = authData?.admin?.find((e) => e.email === loggedEmail);

  const [expanded, setExpanded] = useState(true);

  // 🔹 handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 auto shrink after 2 seconds (only below lg)
  useEffect(() => {
    if (!expanded) return;
    if (window.innerWidth >= 1024) return;

    const timer = setTimeout(() => {
      setExpanded(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [expanded]);

  if (!user) {
    return (
      <div className="h-screen w-screen bg-emerald-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Header firstName={user.firstName || "Admin"} />

      <div className="flex h-[85vh] w-full">
        {/* Sidebar */}
        <div
          className="h-full"
          onClick={() => {
            if (!expanded && window.innerWidth < 1024) {
              setExpanded(true);
            }
          }}
        >
         <Sidebar
  expanded={expanded}
  onItemClick={() => {
    if (window.innerWidth < 1024) {
      setExpanded(false);
    }
  }}
/>
        </div>

        {/* Main content */}
        <div
          className="flex-1 overflow-y-auto h-full"
          onClick={() => {
            if (expanded && window.innerWidth < 1024) {
              setExpanded(false);
            }
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
