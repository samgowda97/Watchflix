import React from 'react'

const Navbar = () => {
  return (
      <div className='nav-head flex items-center justify-between p-4 z-[100] w-full absolute '>
          <h1 className='nav-heading  text-4xl font-bold cursor-pointer'>WATCHFLIX</h1>
          <div>
              <button className='text-white pr-4'>Sign In</button>
              <button className='bg-red-600 px-6 rounded py-4'>Sign Up</button>
          </div>
    </div>
  )
}

export default Navbar