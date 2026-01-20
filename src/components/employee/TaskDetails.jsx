import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const TaskDetails = ({ t, user }) => {
  const { showTaskDetail, authData, setAuthData } = useContext(AuthContext);


  const updatedTask = () => {
  const updatedEmployees = authData.employees.map(emp => {
    if (emp.id !== user.id) return emp; // only logged-in employee

    return {
      ...emp,
      tasks: emp.tasks.map(task => {
        if (task.taskTitle === t.taskTitle && showTaskDetail === 'New-Task') {
          return {
            ...task,
            active: true,
            newTask: false
          };
        }
        if (task.taskTitle === t.taskTitle && showTaskDetail === 'Active-Task') {
          return {
            ...task,
            active: false,
            completed:true
          };
        }
        return task;
      })
    };
  });

  // persistence
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));

  // reactive UI update
  setAuthData({
    ...authData,
    employees: updatedEmployees
  });
};


  return (

    <div className="bg-emerald-100  flex flex-col h-full w-[23%] rounded-2xl shrink-0 p-3">
      <div className="flex justify-between my-3  ">
        <h3 className="bg-emerald-200 py-1 px-3 rounded-3xl text-sm  ">
          {t.category}
        </h3>
        <h3 className="bg-emerald-200 py-1 px-3 rounded-3xl text-sm  ">
          {t.taskDate}
        </h3>
      </div>

      <div className='h-4/5 '>
        <h1 className="text-3xl my-3 text-blue-900">{t.taskTitle}</h1>
        <p className="px-1  line-clamp-8 ">{t.taskDescription}</p>
      </div>


      {showTaskDetail === 'New-Task' && <div className='text-center  '>
        <button onClick={() => {
          updatedTask()
        }}

          className='bg-blue-500 active:scale-98 
        hover:outline hover:outline-emerald-950 hover:bg-blue-300 hover:text-blue-700
        py-2 px-10 text-white rounded-2xl'>Accept Task </button>
      </div>}

      {showTaskDetail === 'Active-Task' && <div className='text-center  '>
        <button onClick={() => {
          updatedTask()
        }} 
        className='bg-blue-500 active:scale-98 
        hover:outline hover:outline-emerald-950 hover:bg-blue-300 hover:text-blue-700
        py-2 px-10 text-white rounded-2xl'>Complete Task </button>
      </div>}

    </div>
  )
}

export default TaskDetails