import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast'

export default function Signup() { 
  const location = useLocation();
  const Navigate = useNavigate
  const from = location.state?.from?.pathname || '/'
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => 
    // console.log(data);
  {
    const userInfo = {
      fullname : data.fullname,
      email : data.email,
      password : data.password
    };
    await axios
    .post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        // alert("Sign successfully!!")
      toast.success('signup successfully!!');
      Navigate(from, {replace:true});
      // <Navigate to='/'/> 
      // // didn't work
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
      if(err.response){
        // alert("Error: "+err.response.data.message)
        toast.error("Error: "+err.response.data.message);      
        
      }
    });
  };  

  return (
    <>
    <div className=' flex h-screen justify-center items-center'>
         <div className="modal-box">
           <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
             {/* if there is a button in form, it will close the modal */}
             <Link to='/'>
             <button 
             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕
            </button>
             </Link>
           
           <h3 className="font-bold text-lg">Signup</h3>
          
           {/* name */}
           <div className='mt-4 space-y-4'>
            <span>Name</span>
            <br/>
            <input
             type='text'
            placeholder='Enter your fullname' 
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("fullname", { required: true })}/>
            <br/>
            {errors.fullname && <span className='text-sm text-red-300'>Name is required</span>}
           </div>

           {/* login */}
           <div className='mt-4 space-y-4'>
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
           <div className='mt-4 space-y-4'>
            <span>Password</span>
            <br/>
            <input 
            type='text' 
            placeholder='Create your password' 
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register("password", { required: true })}/>
            <br/>
             {errors.password && <span className='text-sm text-red-300'>Password is required</span>}
           </div>

           <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 px-4 py-1 rounded-md hover:bg-pink-700 duration-200'>signup</button>
            <p>have account? 
                <button 
                className='underline text-blue-400 cursor-pointer'
                onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    login
                </button>
                <Login/>
            </p>
           </div> 
           </form>          
         </div>
    </div>
    </>
  )
}
