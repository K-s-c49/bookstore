import React from 'react';
import Card from "./card.jsx";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


function Course() {
  const [book, setbook] = useState([])
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setbook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getbook();
  }, []);
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 dark:mt-16 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We're delighted to have you{" "} <span className='text-pink-500'> here! :)</span> </h1>
        <p className='mt-12'>
        "Stories that speak to the heart, ideas that challenge the mind—books that stay with you forever." 
        </p>
        <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1  md:grid-cols-3'>
        {
          book.map((item) => (
            <Card key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  </>)
}

export default Course
