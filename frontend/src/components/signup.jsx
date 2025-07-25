import React from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import Login from "./login.jsx";
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
 const location=useLocation();
 const navigate=useNavigate()
 const from=location.state?.from?.pathname || "/";

    const {
        register, handleSubmit,
        formState: { errors },
    } = useForm();

const onSubmit = async (data) => {
  const userinfo = {
    fullname: data.fullname,
    email: data.email,
    password: data.password,
  };

  try {
    const res = await axios.post("http://localhost:4001/user/signup", userinfo);
    
    console.log(res.data);

    if (res.data) {
       toast.success('Signup Successfully!');
       navigate(from,{replace:true});

      // Save user info to localStorage (if needed)
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }

  } catch (err) {
    if (err.response && err.response.data) {
      console.error(err);
        toast.error("Error: " + err.response.data.message);
    } else {
        toast.error("Error: " + err.response.data.message);
    }
  }
};
    return (
        <>
            <div className="flex h-screen items-center justify-center ">
                <div id="" className="">
                    <div className=" border border-pink-500 p-7 shadow-xl rounded-xl 
            backdrop-blur-md bg-white/10 
            ring-2 ring-pink-400/50 hover:ring-pink-500 transition-all duration-300">
                        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="bg-pink-500 text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder='enter your full name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
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
                                <span>Password</span>
                                <br />
                                <input type="text" placeholder='enter your password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })} />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/**button */}
                            <div className='flex justify-around mt-4'>
                                <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duratrion-200'>Signup</button>
                                <p className='text-xl'>Have account ?{""}</p>
                                <button className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{""}
                                <Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
