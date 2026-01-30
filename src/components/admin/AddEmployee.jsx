import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [address, setAddress] = useState("");
    const [deptName, setDeptName] = useState("");
    const [designation, setDesignation] = useState("");
    const [empType, setEmpType] = useState("");
    const [empStatus, setEmpStatus] = useState("");

    const authContext = useContext(AuthContext);
    const { authData, setAuthData, empIdCount, setEmpIdCount } = authContext
    // const [employees, setEmployees] = useState(authData.employees)
    // const updatedEmployees = [...authData.employees, newEmployee] || []

    // console.log(authData.employees[0])
    // console.log(employees);
    function capitalizeWord(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


    const empSubmitHandler = (e) => {
  e.preventDefault();

  const newEmployee = {
    id: empIdCount,
    role: "employee",
    firstName:capitalizeWord(firstName),
    lastName:capitalizeWord(lastName),
    email: firstName.toLowerCase()+lastName.toLowerCase() + "@e.com",
    password: "123",
    address,
    dateOfJoining: joinDate,
    department: deptName,
    designation,
    employmentType: empType,
    status: empStatus,
    tasks: [],
  };

  const  updatedEmployees = [...authData.employees, newEmployee];

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  setAuthData({
    ...authData,
    employees: updatedEmployees,
  });

  setEmpIdCount(empIdCount + 1);

  // reset form
  setFirstName("");
  setLastName("");
  setJoinDate("");
  setAddress("");
  setDeptName("");
  setDesignation("");
  setEmpType("");
  setEmpStatus("");
};

    return (
        <div className="flex justify-center p-10">
            <form
                onSubmit={(e) => {
                    empSubmitHandler(e);
                }}
                className="w-full max-w-5xl  bg-white rounded-2xl shadow-2xl p-10"
            >
                {/* FORM TITLE (Above both sections) */}
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                    Add New Employee
                </h2>

                {/* FORM CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LEFT SECTION */}
                    <div className="space-y-6">
                        {/* Employee's first name */}
                        <div>
                            <label className="block text-gray-600 mb-1">First Name</label>
                            <input
                            required
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                value={firstName}
                                type="text"
                                placeholder="Employee First Name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                        {/* Employee's last name */}
                        <div>
                            <label className="block text-gray-600 mb-1">Last Name</label>
                            <input 
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                value={lastName}
                                type="text"
                                placeholder="Employee Last Name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Date of join */}
                        <div>
                            <label className="block text-gray-600 mb-1">
                                Date Of Joining
                            </label>
                            <input required
                                onChange={(e) => {
                                    setJoinDate(e.target.value);
                                }}
                                value={joinDate}
                                type="date"
                                className="w-full px-4 py-2 rounded-lg
                                border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-gray-600 mb-1">Address</label>
                            <textarea required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                value={address}
                                rows="3"
                                placeholder="Employee's Address"
                                className="w-full px-4 py-3 rounded-lg
                             border border-gray-300 resize-none
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            ></textarea>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex flex-col justify-between">
                        {/* Department */}
                        <div>
                            <label className="block text-gray-600 mb-1">Department</label>
                            <select required
                                onChange={(e) => {
                                    setDeptName(e.target.value);
                                }}
                                value={deptName}
                                className="w-full px-4 py-2 rounded-lg
                             border border-gray-300
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                {" "}
                                <option className="block text-gray-600 mb-1" value="">
                                    Select Department
                                </option>
                                <option value="HR">Human Resource</option>
                                <option value="Devlopment">Development</option>
                                <option value="Testing">Testing</option>
                                <option value="Sales & Marketing">Sales & Marketing</option>
                            </select>
                        </div>

                        {/* Designation */}
                        <div>
                            <label className="block text-gray-600 mb-1">Designation</label>
                            <select required
                                onChange={(e) => {
                                    setDesignation(e.target.value);
                                }}
                                value={designation}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                {" "}
                                <option value="" className=" text-gray-600 ">
                                    Select Designation
                                </option>
                                <option value="Developer">Software Engineer / Developer</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Sales Executive">Sales Executive</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="HR Executive">HR Executive</option>
                                <option value="HR Manager">HR Manager</option>
                            </select>
                        </div>

                        {/* Employement Type*/}
                        <div>
                            <label className="block text-gray-600 mb-1">
                                Employement Type
                            </label>
                            <select required
                                onChange={(e) => {
                                    setEmpType(e.target.value);
                                }}
                                value={empType}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                {" "}
                                <option value=""></option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>
                        </div>

                        {/* Status*/}
                        <div>
                            <label className="block text-gray-600 mb-1">Status</label>
                            <select required
                                onChange={(e) => {
                                    setEmpStatus(e.target.value);
                                }}
                                value={empStatus}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value=""></option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="text-right mt-8">
                            <button
                                type="submit"
                                className="bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg active:scale-98                        hover:bg-emerald-700 transition"
                            >
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    );
};

export default AddEmployee;