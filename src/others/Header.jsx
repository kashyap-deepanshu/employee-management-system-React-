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
    <div className='flex h-[15vh] w-full items-center justify-between px-10  text-2xl font-bold text-white bg-emerald-950'>
        <h1>Hello,<br /><span className='text-3xl  '> {firstName}</span></h1>
        <button onClick={()=>{
          logOutHandler()
        }} className='border text-xl border-white hover:bg-white hover:text-emerald-800 
        px-6 py-2 rounded-lg transition '>Log Out</button>
    </div>
  )
}

export default Header