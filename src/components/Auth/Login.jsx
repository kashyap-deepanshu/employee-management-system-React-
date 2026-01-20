import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = ({handleLogin}) => {
  // const [isAdmin, setIsAdmin] = useState(false)
  const {isAdmin,setIsAdmin,email,setEmail,password,setPassword }=useContext(AuthContext);
 

  const submitHandler=(e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')  
    setPassword('')
  } 
  return (
    <>
      <div className="flex h-screen w-screen  bg-emerald-900  ">
        <div className="w-3/5  "></div>
        <div className="w-2/5 bg-white rounded-l-4xl flex justify-center items-center ">
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className="flex flex-col h-2/5 w-3/5 p-1   " >
            <h1 className=" text-4xl mb-4 ">Sign In</h1>

            <div className="flex flex-col border-4 border-gray-100  pb-8 rounded-2xl">
            <div className="flex bg-red text-center text-xl font-medium  ">
              <span onClick={()=>{
                setIsAdmin(true)
              }} 
              className={`w-1/2 py-4  ${isAdmin? 'bg-gray-100 font-bold '  : 'bg-white' }  rounded-br-2xl `}>Admin</span>
              <span onClick={()=>{
                setIsAdmin(false)
              }}  className={`w-1/2 py-4  ${isAdmin?  'bg-white' :'bg-gray-100 font-bold ' }  rounded-bl-2xl `}>Employee  </span>
            </div>

            <input required value={email} onChange={(e)=>{
              setEmail(e.target.value)    
            }}
            className="mx-2 my-4  border rounded-2xl px-5 py-3" type="email" name="emai l" placeholder="Enter your password" />
            
            <input required value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="mx-2 mb-4 border rounded-2xl px-5 py-3" type="password" name="password" placeholder="Enter your password" />
            
            <button className="mx-2 mb-4 border rounded-3xl px-5 py-2 
            bg-emerald-800 text-white active:scale-97 
            
            ">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
