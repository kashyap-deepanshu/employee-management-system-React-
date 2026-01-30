import { NavLink } from "react-router-dom";

const Sidebar = ({ expanded, onItemClick }) => {
  const base =
    "py-4 px-6 w-full md:text-lg text-sm transition hover:bg-emerald-100 hover:text-emerald-950";

  const active = "bg-emerald-100 text-black";
  const inactive = "text-white";

  return (
    <div
      className={`
        h-full bg-emerald-950 border-r border-emerald-800
        transition-all duration-300
        ${expanded ? "md:w-60 w-40" : "w-5"}
        overflow-hidden
        flex flex-col
      `}
    >
      <div className="flex flex-col items-start">
        <NavLink
          to="/admin/dashboard"
          onClick={onItemClick}
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/create-task"
          onClick={onItemClick}
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Create Task
        </NavLink>

        <NavLink
          to="/admin/add-employee"
          onClick={onItemClick}
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Add Employee
        </NavLink>

        <NavLink
          to="/admin/show-task"
          onClick={onItemClick}
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Show Tasks
        </NavLink>

        <NavLink
          to="/admin/show-employee"
          onClick={onItemClick}
          className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
        >
          Show Employees
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
