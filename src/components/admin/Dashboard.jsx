import React from "react";
import DashboardCard from "../admin/DashboardCard";
import { Users, ClipboardList, CheckCircle, Clock } from "lucide-react";
import { totalActiveTasks, totalCompletedTasks, totalEmployees, totalTasks } from "../../utils/Count";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-full p-10 w-full">
      <h1 className="text-2xl font-semibold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Employees"
          value={totalEmployees}
          icon={<Users size={22} />}
          gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
        />

        <DashboardCard
          title="Total Tasks"
          value={totalTasks}
          icon={<ClipboardList size={22} />}
          gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
        />

        <DashboardCard
          title="Completed Tasks"
          value={totalCompletedTasks}
          icon={<CheckCircle size={22} />}
          gradient="bg-gradient-to-r from-green-500 to-emerald-500"
        />

        <DashboardCard
          title="Active Tasks"
          value={totalActiveTasks}
          icon={<Clock size={22} />}
          gradient="bg-gradient-to-r from-yellow-500 to-orange-500"
        />
      </div>
    </div>
  );
};

export default Dashboard;
