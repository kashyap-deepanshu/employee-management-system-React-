import React, { useContext, useEffect, useState } from "react";
import Header from "../../others/Header";
import CreateTask from "../admin/CreateTask";
import { AuthContext } from "../../context/AuthProvider";
import Sidebar from "../../others/Sidebar";
import AddEmployee from "../admin/AddEmployee";
import ShowTask from "../admin/ShowTask";
import ShowEmployee from "../admin/ShowEmployee";
import Dashboard from "../admin/Dashboard";
const AdminDashboard = ({ loggedEmail }) => {    

    const [showPage, setShowPage] = useState('dashboard') 
    const authContext = useContext(AuthContext);
    const authData = authContext?.authData;
    const user = authData?.admin?.find((e) => e.email === loggedEmail);
    if (user && authData) { 
         return (
            <div className="bg-gray-100 h-screen w-screen">
                <Header firstName={user?.firstName ||"Admin"} />
                <div className="flex h-[85vh] w-full ">
                <Sidebar setShowPage={setShowPage} showPage={showPage}/>
                <div className="w-[80%] overflow-y-auto scrollbar-hide h-full ">
                {showPage=='dashboard'? <Dashboard />:"" }    
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
