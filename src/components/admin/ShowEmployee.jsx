import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import EditEmployeeModal from '../modal/EditEmployeeModal';


const ShowEmployee = () => {
  const authContext = useContext(AuthContext);
  const employees = authContext?.authData.employees || []
  const [searchEmployee, setSearchEmployee] = useState('')
  const [expandedEmployeeIndex, setExpandedEmployeeIndex] = useState(null)
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  const filteredSearch = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(searchEmployee.toLowerCase()) ||
    emp.lastName.toLowerCase().includes(searchEmployee.toLowerCase()) ||
    emp.designation.toLowerCase().includes(searchEmployee.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchEmployee.toLowerCase())
  )

  const finalSearch = searchEmployee.length > 0 ? filteredSearch : employees;


  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
    setIsEditOpen(true);
  };


  return (

    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

      {/* Table Header */}
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Employees
        </h2>
        <input onChange={(e) => {
          setSearchEmployee(e.target.value)
        }}
          type="text"
          value={searchEmployee}
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
          {finalSearch.map((emp, index) => {
            return <React.Fragment key={index}>
              <tr className="hover:bg-gray-50 transition" >
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
                    className={`px-3 py-1 rounded-full text-xs font-medium ${emp.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {emp.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() =>
                      setExpandedEmployeeIndex(
                        expandedEmployeeIndex === index ? null : index
                      )
                    }
                    className="text-blue-600 hover:underline"
                  >
                    {expandedEmployeeIndex === index ? "Hide" : "View"}
                  </button>

                  <button
                    onClick={() => handleEdit(emp)}
                    className="pl-2 py-1  text-blue-600 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
              {expandedEmployeeIndex === index && (

                <tr className=" col-span-2 " key={`${index}-details`}>
                  <td colSpan="6" className="px-6 py-4">
                    <div className="text-sm text-gray-700  ">
                      <p><b>Name:</b> {`${emp.firstName} ${emp.lastName}`}</p>
                      <p><b>Address:</b> {emp.address}</p>
                      <p><b>Assigned Tasks</b></p>
                      {emp.tasks.map((task, i) => {
                        return (
                          <div className='my-5'>
                            <h1 className='font-bold '>Task:{i + 1}</h1>
                            <p className='px-5'><b>Title: </b>{task.taskTitle}</p>
                            <p className='px-5'><b>Description: </b>{task.taskDescription}</p>
                            <p className='px-5'><b>Created Date: </b>{task.taskDate}</p>
                            <p className='px-5'><b>Due Date: </b>{task.taskDueDate}</p>
                          </div>

                        )
                      })}


                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          }
          )}
        </tbody>
      </table>
      
      {isEditOpen && (
        <EditEmployeeModal
          employee={selectedEmployee}
          closeModal={() => setIsEditOpen(false)}
        />
      )}

    </div>
  )
}

export default ShowEmployee