import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const formatDateForInput = (date) => {
  if (!date) return "";
  return new Date(date).toISOString().split("T")[0];
};

const EditTaskModal = ({ task, closeTaskModal }) => {
  const authContext = useContext(AuthContext);
  const { authData, setAuthData } = authContext;

  const today = new Date().toISOString().split("T")[0];

  const [taskFormData, setTaskFormData] = useState({
    taskId: "",
    newTask: false,
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    taskDueDate: "",
    category: "",
  });

  useEffect(() => {
    if (task) {
      setTaskFormData({
        taskId: task.taskId || "",
        newTask: true,
        taskTitle: task.taskTitle || "",
        taskDescription: task.taskDescription || "",
        taskDate: formatDateForInput(task.taskDate),
        taskDueDate: formatDateForInput(task.taskDueDate),
        category: task.category || "",
      });
    }
  }, [task]);

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Update task
  const submitTaskChangeHandler = () => {
    const updatedEmployees = authData.employees.map((emp) => {
      const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();

      if (fullName !== task.employeeName.toLowerCase()) {
        return emp;
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

  // 🔹 Delete task
  const deleteTaskHandler = () => {
    const updatedEmployees = authData.employees.map((emp) => {
      const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();

      if (fullName !== task.employeeName.toLowerCase()) {
        return emp;
      }

      return {
        ...emp,
        tasks: emp.tasks.filter(
          (t) => t.taskId !== taskFormData.taskId
        ),
      };
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setAuthData({ ...authData, employees: updatedEmployees });
    closeTaskModal();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeTaskModal}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>

        <div className="space-y-3">
          <input
            value={`Task Id :- ${taskFormData.taskId}`}
            className="w-full border p-2 rounded bg-gray-50"
            readOnly
          />

          <input
            name="taskTitle"
            value={taskFormData.taskTitle}
            onChange={handleTaskChange}
            placeholder="Task Title"
            className="w-full border p-2 rounded"
          />

          <input
            name="taskDescription"
            value={taskFormData.taskDescription}
            onChange={handleTaskChange}
            placeholder="Task Description"
            className="w-full border p-2 rounded"
          />

          <input
            name="taskDate"
            value={taskFormData.taskDate || ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-50"
          />

          <input
            type="date"
            min={today}
            name="taskDueDate"
            value={taskFormData.taskDueDate || ""}
            onChange={handleTaskChange}
            className="w-full border p-2 rounded"
          />

          <label className="text-sm font-medium">Category</label>
          <input
            name="category"
            value={taskFormData.category}
            onChange={handleTaskChange}
            placeholder="Task Category"
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          onClick={submitTaskChangeHandler}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded active:scale-95 transition"
        >
          Save Changes
        </button>

        <button
          onClick={deleteTaskHandler}
          className="mt-2 w-full bg-red-500 text-white py-2 rounded active:scale-95 transition"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default EditTaskModal;
