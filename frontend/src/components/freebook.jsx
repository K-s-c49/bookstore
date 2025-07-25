import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import Card from "../../src/components/card.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((item) => item.category === "Free");
        setBook(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white-800 mb-2">
            Free Offered Courses
          </h2>
          <p className="text-sm text-white-600 leading-relaxed max-w-3xl">
            Explore our collection of high-quality free courses designed to help you learn and grow in your career or personal development. Updated regularly!
          </p>
        </div>

        {/* Slider Section */}
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id} className="px-2">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
