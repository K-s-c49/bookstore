import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';
import { useRef } from 'react';

function Login() {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const modalRef = useRef(null);
    const handleClose = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const onSubmit = async (data) => {
  const userinfo = {
    email: data.email,
    password: data.password,
  };

  try {
    const res = await axios.post("http://localhost:4001/user/login", userinfo);
    
    console.log(res.data);

    if (res.data) {
        toast.success('Login Successfully!');
        document.getElementById("my_modal_3").close();
      setTimeout(()=>{
      window.location.reload();
      // Save user info to localStorage (if needed)
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      },1000);
    }
  } catch (err) {
    if (err.response) {
      console.error(err);
      toast.error('Error:'+ err.response.data.message);
        setTimeout(()=>{},2000);
    } 
  }
};
  
    return (<>
        <div className="flex items-center justify-center">
            <dialog
                id="my_modal_3"
                ref={modalRef}
                className="modal  w-full max-w-md sm:max-w-lg  bg-transparent"
            >
                <div className="modal-box w-full border border-pink-500 p-6 sm:p-7 shadow-xl rounded-xl
                    ">
                    
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Botón de cerrar funcional */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>

                        <h3 className="font-bold text-lg">Login</h3>

                        <div className="mt-4 space-y-2">
                            <label className="block">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-sm text-red-500">This field is required</span>
                            )}
                        </div>

                        <div className="mt-4 space-y-2">
                            <label className="block">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <span className="text-sm text-red-500">This field is required</span>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 gap-3">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition duration-200 w-full sm:w-auto"
                            >
                                Login
                            </button>

                            <p className="text-sm">
                                Not registered?{" "}
                                <Link to="/signup" className="underline text-blue-500">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
   </> )
}

export default Login
