import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'


const Header = ({firstName}) => {
  const { setLogin,setLoggedEmail}= useContext(AuthContext);
  const logOutHandler=()=>{
    localStorage.removeItem('loggedUser');
    setLogin(false);
    setLoggedEmail('')
  }

  return (
    <div className='flex md:h-[15vh] h-[12vh] w-full items-center justify-between md:px-10 px-4 text-lg md:text-2xl font-bold text-white bg-emerald-950'>
        <h1>Hello,<br /><span className='md:text-3xl text-lg  '> {firstName}</span></h1>         
        <button onClick={()=>{
          logOutHandler()
        }} className='border md:text-xl text-md border-white hover:bg-white hover:text-emerald-800 
        md:px-6 md:py-2 px-2 py-1 rounded-lg transition '>Log Out</button>
    </div>
 
  )
}

export default Header