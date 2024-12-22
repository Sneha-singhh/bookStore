import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 m-20'>
        <h1 className='mt-28 text-2xl flex justify-center'>
          How can we help you??
        </h1>
        <div className=' grid place-content-center border md:border-none rounded-md mt-4'>
          <h1 className='text-xl mt-4 md:mb-2 '>Contact-us</h1>
        <form className='space-y-6  rounded-md px-4 py-4 md:border'>
          {/* name */}
           <div>
           <h2>
            Name
          </h2>
          <input type='text' placeholder='Enter your name'
          className='px-3 py-1 text-sm outline-none'/>
           </div>
           {/* email */}
           <div>
           <h2>
            Email
          </h2>
          <input type='email' placeholder='Enter your email'
          className='px-3 py-1 text-sm outline-none'/>
           </div>
           {/* message */}
           <div>
           <h2>
            Message
          </h2>
          <input type='text' placeholder='Drop your message'
          className='px-3 py-1 text-sm outline-none'/>
           </div>
           {/* submit button */}
           <button className='bg-pink-500 px-2 py-1 rounded-md hover:bg-pink-600'>Submit</button>
        </form>
        </div>
    </div>
    </>
  )
}
