import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({user}) => {
  const { setShowTaskDetail}=useContext(AuthContext);
  let {newTaskCount} =useContext(AuthContext)
  newTaskCount = user.tasks.filter(task => task.newTask).length;
  // console.log(newTaskCount);
  
  return (
    <div
  onClick={() => setShowTaskDetail('New-Task')}
  className="
    w-full
    bg-yellow-400
    rounded-2xl
    py-6 sm:py-8 lg:py-10
    active:scale-95
    hover:outline hover:outline-white
    transition-all duration-200
  "
>
  <span className="block text-base sm:text-xl lg:text-2xl">
    New Task
  </span>
  <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold">
    {newTaskCount}
  </span>
</div>

  )
}

export default NewTask 