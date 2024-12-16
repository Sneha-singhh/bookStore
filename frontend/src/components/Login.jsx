import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
         <div className="modal-box">
           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
             {/* if there is a button in form, it will close the modal */}
             <Link to='/'>
             <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
              </button>
             </Link>
           
           <h3 className="font-bold text-lg">Login</h3>
           
           {/* login */}
           <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input
             type='email'
              placeholder='Enter your email'
               className='w-80 px-3 py-1 border rounded-md outline-none'
               {...register("email", { required: true })}/>
               <br/>
               {errors.email && <span className='text-sm text-red-300'>Email is required</span>}              
           </div>

           {/* password */}
           <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input 
            type='password' 
            placeholder='Enter your password here' className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("password", { required: true })}/>
            <br/>
             {errors.password && <span className='text-sm text-red-300'>Password is required</span>}           
           </div>

           <div className='flex justify-around mt-3'>
            <button className='bg-pink-500 px-4 py-1 rounded-md hover:bg-pink-700 duration-200'>login</button>
            <p>not registered?
                <Link to="/signup" className='underline text-blue-400 cursor-pointer '>
                    signup
                </Link>
            </p>
           </div>
           </form>
         </div>
      </dialog>
    </>
  )
}
