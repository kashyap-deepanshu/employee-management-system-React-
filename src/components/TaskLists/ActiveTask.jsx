import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const ActiveTask = ({user}) => {
  const {setShowTaskDetail}= useContext(AuthContext);
  let {activeTaskCount} =useContext(AuthContext)
     activeTaskCount = user.tasks.filter(task => task.active).length; 

  return (
    <div onClick={()=>{
      setShowTaskDetail('Active-Task');
    }} className="w-full bg-blue-500 rounded-2xl  py-10 active:scale-98 hover:outline hover:outline-white"> 
                Active <br />{activeTaskCount}
            </div>
  )
}

export default ActiveTask