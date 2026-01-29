import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const EditTaskModal = ({ task, closeTaskModal }) => {

  const authContext = useContext(AuthContext)
  const { authData, setAuthData } = authContext
  const today = new Date().toISOString().split("T")[0];

  const [taskFormData, setTaskFormData] = useState({
    taskId: undefined,
    newTask: "",
    taskTitle: " ",
    taskDescription: "  ",
    // employeeName:"",  
    taskDate: "",
    taskDueDate: "",
    category: "",
  });
  // console.log(task);


  useEffect(() => {
    if (task) {
      setTaskFormData({
        taskId: task.taskId,
        newTask: true,
        taskTitle: task.taskTitle,
        taskDescription: task.taskDescription,
        // employeeName:task.employeeName,
        taskDate: task.taskDate,
        taskDueDate: task.taskDueDate,
        category: task.category,
      })
    }
  }, [task])


  const handleTaskChange = (e) => {
    setTaskFormData({ ...taskFormData, [e.target.name]: e.target.value });
  };


  const submitTaskChangeHandler = () => {
  const updatedEmployees = authData.employees.map((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();

    if (fullName !== task.employeeName.toLowerCase()) {
      return emp; // skip other employees
    }

    return {
      ...emp,
      tasks: emp.tasks.map((t) =>
        t.taskId === taskFormData.taskId
          ? { ...t, ...taskFormData }
          : t
      ),
    };
  });

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  setAuthData({ ...authData, employees: updatedEmployees });
  closeTaskModal();
};

  const deleteTaskHandler = () => {
   const updatedEmployees = authData.employees.map((emp) => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();

    if (fullName !== task.employeeName.toLowerCase()) {
      return emp; // skip other employees
    }

    return {
      ...emp,
      tasks: emp.tasks.filter((t) =>
        t.taskId !== taskFormData.taskId         
      ),
    };
  });

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  setAuthData({ ...authData, employees: updatedEmployees });
  closeTaskModal();
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded-xl p-6 relative">

        <button
          onClick={closeTaskModal}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

        <div className="space-y-3">
          <input
            name="taskId"
            value={`Task Id:-${taskFormData.taskId}`}
            className="w-full border p-2 rounded"
            readOnly
          />
          <input onChange={handleTaskChange}
            name="taskTitle"
            value={`${taskFormData.taskTitle}`}
            placeholder="Task Title"
            className="w-full border p-2 rounded"
          />
          <input onChange={handleTaskChange}
            name="taskDescription"
            value={`${taskFormData.taskDescription}`}
            placeholder="Task Description"
            className="w-full border p-2 rounded"

          />
          {/* <input onChange={handleTaskChange}
            name="employeeName"
            value={`${taskFormData.employeeName}`}
            placeholder="Assign To"
            className="w-full border p-2 rounded"
            
          /> */}
          <input
            name="taskDate"
            value={`${taskFormData.taskDate}`}
            placeholder="Task Date"
            className="w-full border p-2 rounded"
            readOnly
          />
          <input onChange={handleTaskChange}
            type="date"
            min={today}
            name="taskDueDate"
            value={`${taskFormData.taskDueDate}`}
            placeholder="Task Due Date"
            className="w-full border p-2 rounded"

          />
          <label>Category:-</label>
          <input onChange={handleTaskChange}
            name="category"
            value={`${taskFormData.category}`}
            placeholder="Task Category"
            className="w-full border p-2 rounded"
          />


        </div>

        <button onClick={submitTaskChangeHandler}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded active:scale-98 transition">
          Save Changes
        </button>
        <button onClick={deleteTaskHandler}
          className="mt-1 w-full bg-red-500 text-white py-2 rounded active:scale-98 transition">
          Delete task
        </button>
      </div>
    </div>
  );
};

export default EditTaskModal;


