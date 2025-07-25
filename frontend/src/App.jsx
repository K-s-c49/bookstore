import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from "../../frontend/src/home.jsx";
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/courses.jsx';
import Signup from './components/signup.jsx';
import Contacts from './Contact/contacts.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authprovider.jsx';

function App() {
   const [authUser, setAuthUser] = useAuth();
    console.log(authUser)
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Contact' element={<Contacts />} />
      </Routes>
      <Toaster />
    </div>  
    </>
  );
}

export default App
