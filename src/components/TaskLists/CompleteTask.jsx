import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CompleteTask = ({user}) => {
  const {setShowTaskDetail}=useContext(AuthContext);
  let {completedCount} =useContext(AuthContext)
  completedCount = user.tasks.filter(task => task.completed).length;

  
  return (
    <div onClick={()=>{
      setShowTaskDetail('Complete-Task')
    }} className="w-full bg-green-500 rounded-2xl  py-10 active:scale-98 hover:outline hover:outline-white">
                Completed <br />{completedCount}
            </div>
  )
}

export default CompleteTask