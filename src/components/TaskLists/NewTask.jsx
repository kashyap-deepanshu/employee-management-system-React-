import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({user}) => {
  const { setShowTaskDetail}=useContext(AuthContext);
  let {newTaskCount} =useContext(AuthContext)
  newTaskCount = user.tasks.filter(task => task.newTask).length;
  // console.log(newTaskCount);
  
  return (
    <div onClick={()=>{
      setShowTaskDetail('New-Task')
    }} className="w-full bg-yellow-400 rounded-2xl  py-10 active:scale-98 hover:outline hover:outline-white  ">
                New Task <br />{newTaskCount}
                
            </div>  
  )
}

export default NewTask 