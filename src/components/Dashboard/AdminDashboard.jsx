import React, { useContext, useEffect, useState } from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import { AuthContext } from "../../context/AuthProvider";
import Sidebar from "../../others/Sidebar";
import AddEmployee from "../../others/AddEmployee";
import ShowTask from "../../others/ShowTask";
import ShowEmployee from "../../others/ShowEmployee";
const AdminDashboard = ({ loggedEmail }) => {    

    const [showPage, setShowPage] = useState('') 
    const authContext = useContext(AuthContext);
    const authData = authContext?.authData;
    const user = authData?.admin?.find((e) => e.email === loggedEmail);
    if (user && authData) { 
         return (
            <div className="bg-emerald-900 h-screen w-screen">
                <Header firstName={user?.firstName ||"Admin"} />
                <div className="flex h-[85vh] w-full ">
                <Sidebar setShowPage={setShowPage} showPage={showPage}/>
                <div className="w-[80%] overflow-y-auto scrollbar-hide h-full ">
                {showPage=='createTask'? <CreateTask />:"" }
                {showPage=='addEmployee'? <AddEmployee/>:""}
                {showPage=='showTask'? <ShowTask />:"" }
                {showPage=='showEmployee'? <ShowEmployee/>:""}
            </div>
                
                </div>
            </div>
        );
        
    } else {
       return (
            <div className="h-screen w-screen bg-emerald-900 text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }
};

export default AdminDashboard;
