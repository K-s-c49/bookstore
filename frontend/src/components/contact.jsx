import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Navbar from './navbar';

function Contact() {
      const {
            register, handleSubmit,
            formState: { errors },
        } = useForm();
    
        const onSubmit = (data) => console.log(data);
  return (
         <>
         <div>
            <div className="flex h-screen items-center justify-center">
                <div id="" className="">
                    <div className=" border border-pink-500 p-7 shadow-xl rounded-xl 
            backdrop-blur-md bg-white/10 
            ring-2 ring-pink-400/50 hover:ring-pink-500 transition-all duration-300">
                        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="bg-pink-500 text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Contact Us</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='enter your full name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder='enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })} />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/**password copy div upper */}
                            <div className='mt-4 space-y-2'>
                                <span>Message</span>
                                <br />
                                <textarea className="textarea textarea-border rounded-md outline-none" placeholder="Enter your message here" {...register("Message", { required: true })}></textarea>
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/**button */}
                            <div className='flex justify-around mt-4'>
                                <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duratrion-200'>Submit</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}

export default Contact
