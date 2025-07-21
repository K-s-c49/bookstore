import React from 'react';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer';
import Contact from '../components/contact.jsx';

function Contacts() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Contact />
    </div>  
      <Footer />
    </div>
  )
}

export default Contacts
