import React from 'react';
import suhaneSafar from '../assets/suhaneSafar.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#0891B2] w-full fixed top-0 right-0 z-20 px-6'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3'>
        <Link to='/'>
          <img src={suhaneSafar} alt="Suhane Safar" className='h-14' />
        </Link>
        <div className='flex space-x-6 items-center text-lg'>
            <Link className='text-white'>About Us</Link>
            <Link className='text-white'>Treks</Link>
            <Link className='text-white'>Gallery</Link>
            <Link className='text-white'>Testimonials</Link>
            <Link className='bg-amber-200 py-1.5 px-4 rounded-xl font-semibold'>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
