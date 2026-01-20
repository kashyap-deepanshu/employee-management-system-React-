import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskAssignTo, setTaskAssignTo] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const {authData, setAuthData } = useContext(AuthContext);

    // this is used to give select employee name option to create Task
    let empName=[]
    authData.employees.map((e)=>{
        empName.push(e.firstName)
    })

    const createTaskSubmitHandler = (e) => {
        e.preventDefault();
        const addedNewTask = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskDate: taskDueDate,
            category: taskCategory,
        };
        const index = authData.employees.findIndex(
            (e) => e.firstName === taskAssignTo,
        );

        if (index === -1) {
            alert("Employee not found");
            return;
        }

        const updatedEmployees = authData.employees.map((emp, i) =>
            i === index ? { ...emp, tasks: [...emp.tasks, addedNewTask] } : emp,
        );

        // persistence
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        // reactive UI update
        setAuthData({ ...authData, employees: updatedEmployees });
        setTaskAssignTo("");
        setTaskCategory("");
        setTaskDescription("");
        setTaskDueDate("");
        setTaskTitle("");
    };

    return (
        <div className="flex justify-center p-10">
            <form
                onSubmit={(e) => {
                    createTaskSubmitHandler(e);
                }}
                className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-10"
            >
                {/* FORM TITLE (Above both sections) */}
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                    Create New Task
                </h2>

                {/* FORM CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* LEFT SECTION */}
                    <div className="space-y-6">
                        {/* Task Title */}
                        <div>
                            <label className="block text-gray-600 mb-1">Task Title</label>
                            <input
                                onChange={(e) => {
                                    setTaskTitle(e.target.value);
                                }}
                                value={taskTitle}
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full px-4 py-2 rounded-lg
                                border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Due Date */}
                        <div>
                            <label className="block text-gray-600 mb-1">Due Date</label>
                            <input
                                value={taskDueDate}
                                onChange={(e) => {
                                    setTaskDueDate(e.target.value);
                                }}
                                type="date"
                                className="w-full px-4 py-2 rounded-lg
                             border border-gray-300
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            /> 
                        </div>

                        {/* Assign To */}
                        <div>
                            <label className="block text-gray-600 mb-1">Assign To</label>
                            <select
                                onChange={(e) => {
                                    setTaskAssignTo(e.target.value);
                                }}
                                value={taskAssignTo}
                                type="text"
                                // placeholder="Employee Name"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="" hidden disabled>Select Employee</option>
                                {empName.map((emp, idx) => {
                                    return (
                                        <option key={idx} value={emp}>{emp}</option>)
                                })}
                            </select>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-600 mb-1">Category</label>
                            <select
                                value={taskCategory}
                                onChange={(e) => {
                                    setTaskCategory(e.target.value);
                                }}
                                className="w-full px-4 py-2 rounded-lg
                             border border-gray-300
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                {" "}
                                <option value="">Select Category</option>
                                <option value="Design">Design</option>
                                <option value="Devlopment">Development</option>
                                <option value="Testing">Testing</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex flex-col justify-between">
                        {/* Description */}
                        <div>
                            <label className="block text-gray-600 mb-1">Description</label>
                            <textarea
                                onChange={(e) => {
                                    setTaskDescription(e.target.value);
                                }}
                                value={taskDescription}
                                rows="9"
                                placeholder="Describe the task in detail..."
                                className="w-full px-4 py-3 rounded-lg
                             border border-gray-300 resize-none
                             focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-right mt-8">
                            <button
                                type="submit"
                                className="bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg active:scale-98                        hover:bg-emerald-700 transition"
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
