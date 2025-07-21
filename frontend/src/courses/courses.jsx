import React from 'react';
import Navbar from '../components/navbar.jsx';
import Course from '../components/course.jsx';
import Footer from '../components/footer';

function Courses() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Course />
    </div>  
      <Footer />
    </div>
  )
}

export default Courses
