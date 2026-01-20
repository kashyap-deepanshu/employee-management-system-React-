import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import TaskDetails from "../../others/TaskDetails";

const TaskList = ({ user }) => { 
  const { showTaskDetail } = useContext(AuthContext);
  // console.log(showTaskDetail);

  return (
    <>
      <h1 className="font-bold text-4xl ml-10 text-white ">
        {showTaskDetail} List
      </h1>
      <div
        id="taskList"
        className=" flex gap-5 m-10  h-[40%] overflow-x-auto rounded-2xl flex-nowrap no-scrollbar text-emerald-950 font-bold "
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
