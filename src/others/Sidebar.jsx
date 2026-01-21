import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const base =
    "py-5 border-y px-10 w-full rounded-r-md text-2xl transition hover:bg-emerald-100 hover:text-emerald-950";

  const active = "bg-emerald-100 text-black";
  const inactive = "text-white";

  return (
    <div className="w-[20%] h-full bg-emerald-950 border-r-emerald-800 border flex flex-col items-start">
      <NavLink to="/admin/dashboard" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Dashboard
      </NavLink>

      <NavLink to="/admin/create-task" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Create Task
      </NavLink>

      <NavLink to="/admin/add-employee" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Add Employee
      </NavLink>

      <NavLink to="/admin/show-task" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Show Tasks
      </NavLink>

      <NavLink to="/admin/show-employee" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Show Employees
      </NavLink>
    </div>
  );
};

export default Sidebar;
