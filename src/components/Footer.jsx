import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-2xl  md:mt-0'>
      <div className='flex flex-col md:flex-row  justify-between p-8 md:px-32 px-5'>
        <div className='w*full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>CafePlulse</h1>
          <p className='text-sm'>Welcome to our coffee haven! Explore our aromatic brews, Savor artisanal flavors , and discover the prefect roas to elevate your daily ritual.</p>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Menu</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">About Us</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Products</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Reviews</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Cappuccion</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Latte</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Americano</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contacu Us</h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">CafePulse@gmail.com</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">+84 958 248 956</a>
            <a className='hover:text-backgroundColor transition-all cursor-pointer' href="/">Social media</a>
          </nav>
        </div>
        {/* <div>
          <p className='text-center py-4'>
            @Goraka Harish by
            <span className='text-backgroundColor'>React programmers</span> |
            All right creaters
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
