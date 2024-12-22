import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { set } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Logout() {
    const [authUser,setAuthUser] = useAuth()
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully");
        setTimeout(()=>{
          window.location.reload();
        },2000)
        } catch (error) {
            toast.error("Error : " +error.message)
            setTimeout(() => {}, 2000);  
        }
    }
  return (
    <>
      <button className='px-3 py-1 bg-red-500 text-white  rounded-md cursor-pointer'
      onClick={handleLogout}>
         logout
      </button>
    </>
  )
}
