import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from "../../frontend/src/home.jsx";
import { Route, Routes } from "react-router-dom"
import Courses from './courses/courses.jsx';
import Signup from './components/signup.jsx';
import Contacts from './Contact/contacts.jsx';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Course' element={<Courses />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Contact' element={<Contacts />} />
      </Routes>
    </div>  
    </>
  );
}

export default App
