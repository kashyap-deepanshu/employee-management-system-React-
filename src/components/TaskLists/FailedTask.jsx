import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const FailedTask = ({user}) => {
  const {setShowTaskDetail}= useContext(AuthContext);
  let {failedCount} =useContext(AuthContext)
    failedCount = user.tasks.filter(task => task.failed).length;

  return (
    <div onClick={()=>{
      setShowTaskDetail('Failed-Task')
    } } className="w-full bg-red-500 rounded-2xl py-10 active:scale-98 hover:outline hover:outline-white">
                Failed <br />{failedCount}
            </div>
  )
}

export default FailedTask