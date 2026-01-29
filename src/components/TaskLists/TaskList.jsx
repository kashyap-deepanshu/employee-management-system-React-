import React, { useContext } from "react";
import TaskDetails from "../employee/TaskDetails";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ user }) => { 
  const { showTaskDetail } = useContext(AuthContext);
  // console.log(showTaskDetail); 

  return (
    <>
      <h1 className="
  font-bold 
  text-2xl sm:text-3xl lg:text-4xl 
  ml-4 sm:ml-6 lg:ml-10 
  text-white
">
  {showTaskDetail} List
</h1>
      <div
  id="taskList"
  className="
    flex gap-4 sm:gap-5
    m-4 sm:m-6 lg:m-10
    h-80 sm:h-90 lg:h-100
    overflow-x-auto
    rounded-2xl
    flex-nowrap
    no-scrollbar
    text-emerald-950
    font-bold
  "
>
        {user.tasks.map((t ,idx) => {
          return (
            (t.active && showTaskDetail==='Active-Task') && (<TaskDetails user={user}  key={idx} t={t}/>)||
            (t.newTask && showTaskDetail==='New-Task') && (<TaskDetails user={user} key={idx} t={t}/>)||
            (t.completed && showTaskDetail==='Complete-Task') && (<TaskDetails user={user} key={idx} t={t}/>)||
            (t.failed && showTaskDetail==='Failed-Task') && (<TaskDetails user={user} key={idx} t={t}/>) 
            
            
            );
        })}
      </div>
    </>
  );
};

export default TaskList;
