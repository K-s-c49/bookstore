import React from 'react'
import Ban from "../../public/ban.jpg"

function Banner() {
  return (<>  
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
      <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-blod'>Hello, welcome here ho come learn something <span className='text-pink-500'> new everyday!!!</span></h1>
          <p className='text-xl font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis earum quasi, sed quia ea dolorem. Corporis veritatis neque ipsa quisquam earum vel cumque velit tempore quo, est magnam, voluptas beatae!</p>
          <label className="input input-bordered validator flex items-center gap-2">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                viewBox='0 0 16 16'
                fill="currentColor"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn mt-6 btn-secondary">Get Started</button>
      </div>
      <div className='order-1 w-full md:w-1/2  md:mt-12  flex justify-center space-x-4'>
        <img src="../../public/ban.jpg" className='w-92 h-98 rounded  ' alt="" />
      </div>
    </div>
  </>
  )
}

export default Banner
