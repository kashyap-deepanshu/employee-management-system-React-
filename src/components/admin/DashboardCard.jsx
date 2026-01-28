import React from "react";

const DashboardCard = ({ title, value, icon, gradient }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Gradient Accent */}
      <div
        className={`absolute top-0 left-0 h-1 w-full ${gradient}`}
      ></div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">
            {title}
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${gradient}`}
        >
          {icon}
        </div>
      </div>

      {/* Subtle background shape */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gray-100"></div>
    </div>
  );
};

export default DashboardCard;
