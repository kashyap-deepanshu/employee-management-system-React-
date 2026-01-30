import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ArrowUpDown } from 'lucide-react';
import React from "react";
import EditTaskModal from "../modal/EditTaskModal";


const getStatus = (task) => {
  if (task.newTask) return { label: "New", style: "bg-blue-100 text-blue-700" };
  if (task.active) return { label: "Active", style: "bg-yellow-100 text-yellow-700" };
  if (task.completed) return { label: "Completed", style: "bg-green-100 text-green-700" };
  if (task.failed) return { label: "Failed", style: "bg-red-100 text-red-700" };
};

export default function ShowTask() {
  const [isDueDateSort, setIsDueDateSort] = useState(false)
  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);
  const [searchText, setSearchText] = useState('')
  const { authData } = useContext(AuthContext);
  const employees = authData?.employees || []

  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);


  // main sorting ,searching logic to manipulate our show task list
  const allTasks = employees.flatMap(emp =>
    emp.tasks.map(task => ({
      ...task, employeeName: `${emp.firstName} ${emp.lastName}`,
    }))
  )
  const filteredTasks = allTasks.filter(task =>
    task.taskTitle.toLowerCase().includes(searchText.toLowerCase()) ||
    task.category.toLowerCase().includes(searchText.toLowerCase()) ||
    task.taskDescription.toLowerCase().includes(searchText.toLowerCase())
  )



  const today = new Date();

  const finalTasks = isDueDateSort
    ? [...filteredTasks]
      // 1️⃣ Sirf future tasks
      .filter(task => new Date(task.taskDueDate) >= today)
      // 2️⃣ Nearest due date first
      .sort((a, b) => new Date(a.taskDueDate) - new Date(b.taskDueDate))
    : filteredTasks;

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsEditTaskOpen(true);
  };

  return (
    <div className="bg-white  rounded-xl border border-gray-200 shadow-sm h-full ">

      {/* Header */}
      <div className="px-6 py-4 border-b flex justify-between items-center  ">
        <h2 className=" font-semibold text-gray-800 sm:text-m  md:text-xl ">
          Tasks:- {finalTasks.length}
        </h2>

        <input onChange={(e) => {
          setSearchText(e.target.value)
        }}
          type="text"
          value={searchText}
          placeholder="Search task..."
          className="px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-25 md:w-50"
        />
      </div>

      {/* Table */}
 <div className="overflow-y-auto max-h-[calc(100vh-220px)] no-scrollbar">        
    <table className="w-full  sm:text-sm text-xs">
          <thead className="bg-gray-50 text-gray-600 uppercase  text-xs sticky top-0 ">
            <tr>
              <th className="md:px-6 md:py-5 px-3 py-2 text-left">S.No</th>
              <th className="md:px-6 md:py-5 px-3 py-2 text-left">Task</th>
              <th className="md:px-6 md:py-5 px-3 py-2">Category</th>
              <th className="md:px-6 md:py-5 px-3 py-2">Created Date</th>
              <th onClick={() => {
                isDueDateSort ? setIsDueDateSort(false) : setIsDueDateSort(true)
                console.log("hello");

              }
              }
                className="flex justify-center items-center md:px-6 md:py-5 px-3 py-2">Due Date<ArrowUpDown className={` mx-2 p-2 ${isDueDateSort ? "bg-blue-100 rounded-xl" : ''}`} size={30} /></th>

              <th className="md:px-6 md:py-5 px-3 py-2">Status</th>
              <th className="md:px-6 md:py-5 px-3 py-2 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {finalTasks.map((task, index) => {
              const status = getStatus(task);

              return (
                <React.Fragment key={`${task.taskTitle}-${index}`}>
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="md:px-6 md:py-5 px-3 py-2 text-center">{index+1}</td>

                    <td className="md:px-6 md:py-5 px-3 py-2">
                      <p className="font-medium text-gray-800">{task.taskTitle}</p>
                      <p className="text-xs text-gray-500">{task.taskDescription}</p>
                    </td>

                    <td className="md:px-6 md:py-5 px-3 py-2 text-center">{task.category}</td>
                    <td className="md:px-6 md:py-5 px-3 py-2 text-center">{task.taskDate}</td>
                    <td className="md:px-6 md:py-5 px-3 py-2 text-center">{task.taskDueDate}</td>

                    <td className="md:px-6 md:py-5 px-3 py-2 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${status.style}`}
                      >
                        {status.label}
                      </span>
                    </td>

                    <td className="md:px-6 md:py-5 px-3 py-2 text-right">
                      <button
                        onClick={() =>
                          setExpandedTaskIndex(
                            expandedTaskIndex === index ? null : index
                          )
                        }
                        className="text-blue-600 hover:underline"
                      >
                        {expandedTaskIndex === index ? "Hide" : "View"}
                      </button>
                      <button
                        onClick={() => handleEditTask(task)}
                        className="pl-2 py-1  text-blue-600 rounded"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>

                  {expandedTaskIndex === index && (
                    <tr className="bg-gray-50 "  key={`${index}-details`}>
                      <td colSpan="6" className="px-6 py-4">
                        <div className="text-sm text-gray-700  space-y-1">
                          <p><b>Description:</b> {task.taskDescription}</p>
                          <p><b>Category:</b> {task.category}</p>
                          <p><b>Status:</b> {status.label}</p>
                          <p><b>Assign To:</b> {task.employeeName}</p>

                          <p><b>Created Date:</b> {task.taskDate}</p>
                          <p><b>Due Date:</b> {task.taskDueDate}</p>

                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}

          </tbody>
        </table>
        {isEditTaskOpen && (
        <EditTaskModal
          task={selectedTask}
          closeTaskModal={() => setIsEditTaskOpen(false)}
        />
      )}
      </div>
    </div>
  );
}