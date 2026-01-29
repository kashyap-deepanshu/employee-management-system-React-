import React, { useContext } from 'react'
import Header from '../../others/Header'
import TaskListNumbers from '../employee/TaskListNumbers'
import TaskList from '../TaskLists/TaskList'
import { AuthContext } from '../../context/AuthProvider' 
// import TaskCards from '../TaskLists/TaskCards'

const EmployeeDashboard = ({loggedEmail}) => { 
  const authContext =useContext(AuthContext)
  const authData =authContext?.authData;
  const user =authData?.employees?.find((e)=>e.email===loggedEmail)
  if(!user){
    return (
      <div className="h-screen w-screen bg-emerald-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }else{
  return (
<div className="min-h-screen w-full bg-emerald-900 text-white">
        <Header firstName={user?.firstName} />
        <TaskListNumbers user={user}/> 
        <TaskList user={user}/>
    {/* <TaskCards tasks={user.tasks}/> */}  
    </div>
  )
  }

}

export default EmployeeDashboard