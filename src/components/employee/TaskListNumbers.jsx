import React from "react";
import NewTask from "../TaskLists/NewTask";
import ActiveTask from "../TaskLists/ActiveTask";
import CompleteTask from "../TaskLists/CompleteTask"; 
import FailedTask from "../TaskLists/FailedTask";



const TaskListNumbers = ({user}) => {
    return (
        <div className="p-10 flex gap-10 w-full text-3xl font-semibold text-center ">
            <NewTask  user={user}/>
            <ActiveTask user={user}/>
            <CompleteTask user={user}/>
            <FailedTask user={user}/>                       
        </div>
    );
};

export default TaskListNumbers; 