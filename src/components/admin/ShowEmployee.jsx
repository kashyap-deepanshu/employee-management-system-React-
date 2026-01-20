import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const ShowEmployee = () => {
  const authContext =useContext(AuthContext);
  const employees =authContext?.authData.employees
  

//   const employees = [
//   {
//     id: 1,
//     role: "employee",
//     firstName: "Arjun",
//     lastName: "Sharma",
//     email: "arjun@e.com",
//     address: "Delhi, India",
//     dateOfJoining: "2023-01-15",
//     department: "Development",
//     designation: "Developer",
//     employmentType: "Full Time",
//     status: "Active",
//   },
// ];
  return (
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      
      {/* Table Header */}
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Employees
        </h2>
        <input
          type="text"
          placeholder="Search employee..."
          className="border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Employee</th>
            <th className="px-6 py-3">Department</th>
            <th className="px-6 py-3">Designation</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Joined</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className="hover:bg-gray-50 transition"
            >
              {/* Name + Email */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                    {emp.firstName[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {emp.firstName} {emp.lastName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {emp.email}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4">
                {emp.department}
              </td>

              <td className="px-6 py-4">
                {emp.designation}
              </td>

              <td className="px-6 py-4">
                <span className="px-2 py-1 rounded-md text-xs bg-gray-100">
                  {emp.employmentType}
                </span>
              </td>

              <td className="px-6 py-4">
                {emp.dateOfJoining}
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    emp.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {emp.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4 text-right">
                <button className="text-blue-600 hover:underline mr-3">
                  View
                </button>
                <button className="text-gray-600 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowEmployee