import React from 'react'
// import SiCoffeescript from 'react-icons/si'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'
import { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <div className='fixed w-full z-10'>
      <div>
        <div className='flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className='flex flex-row items-center cursor-pointer gap-2'>
            <span>
              <i class="fa-solid fa-mug-saucer text-xl"></i>
            </span>
            <h1 className='text-xl font-semibold'>CafePulse</h1>
          </div>

          <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
            <Link to="home" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor'>Home <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="menu" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor'>Menu <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor'>About <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="products" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor'>Products <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="reviews" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor'>Reviews <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
          </nav>

          <div className='hidden lg:flex'>
            <Button title="Login" />
          </div>

          <div className='md:hidden flex items-center'>
               {menu ? (
                <i class="fa-solid fa-xmark" onClick={handleChange}></i>
               ):(
                <i class="fa-solid fa-bars" onClick={handleChange}></i>
               )}
          </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link to="home" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor' onClick={closeMenu}>Home <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="menu" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor' onClick={closeMenu}>Menu <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor' onClick={closeMenu}>About <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="products" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor' onClick={closeMenu}>Products <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
            <Link to="reviews" spy={true} smooth={true} duration={500} className='group relative inline-block  coursor-pointer hover:text-brightColor' onClick={closeMenu}>Reviews <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>

            <Button title="Login" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
