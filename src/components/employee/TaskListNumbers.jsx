import React from "react";
import NewTask from "../TaskLists/NewTask";
import ActiveTask from "../TaskLists/ActiveTask";
import CompleteTask from "../TaskLists/CompleteTask"; 
import FailedTask from "../TaskLists/FailedTask";



const TaskListNumbers = ({user}) => {
    return (
        <div className="
    p-4 sm:p-6 lg:p-10
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-4
    gap-4 sm:gap-6 lg:gap-10
    w-full
    text-xl sm:text-2xl lg:text-3xl
    font-semibold 
    text-center
  "> 
            <NewTask  user={user}/>
            <ActiveTask user={user}/>
            <CompleteTask user={user}/>
            <FailedTask user={user}/>                       
        </div>
    );
};

export default TaskListNumbers; 