import React, { useState } from 'react'

const Sidebar = ({showPage, setShowPage }) => {
    const [activePageBtn, setActivePageBtn] = useState('')
    const style = 'py-5 active:scale-98 hover:bg-emerald-100 hover:text-emerald-950 transition border-y px-10 w-full rounded-r-md  '
    return (
        <div className="w-[20%] h-full  bg-emerald-950 border-r-emerald-800 border flex flex-col items-start text-2xl  ">
            <button onClick={() => {
                setShowPage("createTask")
                setActivePageBtn("creteTask")
            }} className={`${style} ${showPage==="createTask"?"bg-emerald-100 text-black" :"text-white"} `}>Create Task</button>

            <button onClick={() => {
                setShowPage("addEmployee")
                setActivePageBtn("addEmployee")
            }} className={`${style} ${showPage==="addEmployee"?"bg-emerald-100 text-black" :"text-white"} `}>Add Employee</button>

            <button onClick={() => {
                setShowPage("showTask")
                setActivePageBtn("showTask")
            }} className={`${style} ${showPage==="showTask"?"bg-emerald-100 text-black" :"text-white"} `}>Show Tasks</button>

            <button onClick={() => {
                setShowPage("showEmployee")
                setActivePageBtn("showEmployee")
            }} className={`${style} ${showPage==="showEmployee"?"bg-emerald-100 text-black" :"text-white"} `}>Show Employee's</button>


        </div>
    )
}

export default Sidebar