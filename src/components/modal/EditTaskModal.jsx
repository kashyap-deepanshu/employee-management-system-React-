// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthProvider";

// const EditTaskModal = ({ task, closeTaskModal }) => {

//     const authContext = useContext(AuthContext)
//     const { authData, setAuthData } = authContext

//     const [formData, setFormData] = useState({
//         id: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//         department: "",
//         designation: "",
//         employmentType: '',
//         status: ''
//     });
//     console.log(task);
//     authData.tasks.map((item) => {
//         if (item === task) {
//             console.log(item);


//         }

//     })


//     useEffect(() => {
//         if (task) {
//             setFormData({
//                 id: task.id,
//                 firstName: task.firstName,
//                 lastName: task.lastName,
//                 email: task.email,
//                 department: task.department,
//                 designation: task.designation,
//                 employmentType: task.employmentType,
//                 status: task.status
//             });
//         }
//     }, [task]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const submitChangeHandler = () => {
//         closeModal(true)
//         const updatedtasks = authData.tasks.map((emp) =>
//             emp.id === formData.id ? { ...emp, ...formData } : emp
//         );
//         localStorage.setItem("tasks", JSON.stringify(updatedtasks));
//         setAuthData({
//             ...authData,
//             tasks: updatedtasks, 
//         });
//     }
//     const deletetaskHandler = () => {
        

//         const updatedtasks = authData.tasks.filter(
//             (emp) => emp.id !== formData.id
//         );
//         localStorage.setItem("tasks", JSON.stringify(updatedtasks));
//         setAuthData({
//             ...authData,
//             tasks: updatedtasks,
//         });
//         closeModal(true)

//     }

//     return (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white w-105 rounded-xl p-6 relative">

//                 <button
//                     onClick={closeModal}
//                     className="absolute top-3 right-3 text-gray-500 text-xl"
//                 >
//                     ✕
//                 </button>

//                 <h2 className="text-lg font-semibold mb-4">Edit task</h2>

//                 <div className="space-y-3">
//                     <input
//                         name="id"
//                         value={`Emp Id:-${formData.id}`}
//                         placeholder="ID"
//                         className="w-full border p-2 rounded"
//                         readOnly
//                     />
//                     <input
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="First Name"
//                         className="w-full border p-2 rounded"
//                     />

//                     <input
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Last Name"
//                         className="w-full border p-2 rounded"
//                     />

//                     <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email"
//                         className="w-full border p-2 rounded"
//                     />

//                     <input
//                         name="department"
//                         value={formData.department}
//                         onChange={handleChange}
//                         placeholder="Department"
//                         className="w-full border p-2 rounded"
//                     />

//                     <input
//                         name="designation"
//                         value={formData.designation}
//                         onChange={handleChange}
//                         placeholder="Designation"
//                         className="w-full border p-2 rounded"
//                     />
//                     <input
//                         value={formData.employmentType}
//                         className="w-full border p-2 rounded"
//                         readOnly
//                     />
//                     <div className="flex gap-4">
//                         <button
//                             type="button"
//                             onClick={() =>
//                                 setFormData({ ...formData, employmentType: "Full Time" })
//                             }
//                             className={`px-4 py-2 rounded-md border w-1/2 transition
//                             ${formData.employmentType === "Full Time"
//                                     ? "bg-green-200 text-black border-green-600"
//                                     : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
//                                 }`}
//                         >
//                             Full Time
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() =>
//                                 setFormData({ ...formData, employmentType: "Part Time" })
//                             }
//                             className={`px-4 py-2 rounded-md border w-1/2 transition
//                             ${formData.employmentType === "Part Time"
//                                     ? "bg-red-200 text-black border-red-600"
//                                     : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
//                                 }`}
//                         >
//                             Part Time
//                         </button>
//                     </div>
//                     <input
//                         value={formData.status}
//                         placeholder="Status"
//                         className="w-full border p-2 rounded"
//                         readOnly
//                     />
//                     <div className="flex gap-4">
//                         <button
//                             type="button"
//                             onClick={() =>
//                                 setFormData({ ...formData, status: "Active" })
//                             }
//                             className={`px-4 py-2 rounded-md border w-1/2 transition
//                             ${formData.status === "Active"
//                                     ? "bg-green-600 text-white border-green-600"
//                                     : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
//                                 }`}
//                         >
//                             Active
//                         </button>

//                         <button
//                             type="button"
//                             onClick={() =>
//                                 setFormData({ ...formData, status: "Inactive" })
//                             }
//                             className={`px-4 py-2 rounded-md border w-1/2 transition
//                             ${formData.status === "Inactive"
//                                     ? "bg-red-500 text-white border-red-600"
//                                     : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
//                                 }`}
//                         >
//                             Inactive
//                         </button>
//                     </div>


//                 </div>

//                 <button onClick={submitChangeHandler}
//                     className="mt-5 w-full bg-blue-600 text-white py-2 rounded active:scale-98 transition">
//                     Save Changes
//                 </button>
//                 <button onClick={deletetaskHandler}
//                     className="mt-1 w-full bg-red-500 text-white py-2 rounded active:scale-98 transition">
//                     Delete task
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default EditTaskModal;


import React from 'react'

const EditTaskModal = () => {
  return (
    <div>EditTaskModal</div>
  )
}

export default EditTaskModal