import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const getStatus = (task) => {
  if (task.newTask) return { label: "New", style: "bg-blue-100 text-blue-700" };
  if (task.active) return { label: "Active", style: "bg-yellow-100 text-yellow-700" };
  if (task.completed) return { label: "Completed", style: "bg-green-100 text-green-700" };
  if (task.failed) return { label: "Failed", style: "bg-red-100 text-red-700" };
};

export default function ShowTask() {

  const {authData} =useContext(AuthContext);
const employees=authData?.employees;
// employees.map((emp)=>{
//   emp.tasks.map((task)=>console.log(task.taskTitle) )  
// })

  return (
    <div className="bg-white  rounded-xl border border-gray-200 shadow-sm">
      
      {/* Header */}
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Tasks
        </h2>

        <input
          type="text"
          placeholder="Search task..."
          className="px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 text-left">Task</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Due Date</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y">
            {
              employees.map((emp)=>{
                return(
                  emp.tasks.map((task,index)=>{
                    const status =getStatus(task)
                    return(
                      <tr key={index} className="hover:bg-gray-50">
                
                {/* Task title + description */}
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-800">
                    {task.taskTitle}
                  </p>
                  <p className="text-xs text-gray-500">
                    {task.taskDescription}
                  </p>
                </td>

                <td className="px-6 py-4 text-center">
                  {task.category}
                </td>

                <td className="px-6 py-4 text-center">
                  {task.taskDate}
                </td>

                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.style}`}>
                    {status.label}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
                    )
                  })
                )
              })
            }
        </tbody>
      </table>
    </div>
  );
}
