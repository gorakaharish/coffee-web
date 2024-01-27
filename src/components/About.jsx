import React from 'react'
import img from '../assets/img/about.jpg'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
      <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>

      <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
          <img className='rounded-lg' src={img} alt="" />
        </div>
        <div className='w-full lg:w-2/4 p-4 space-t-3'>
          <h2 className='font-semibold text-3xl'>What Make Our Coffee Special?</h2>
          <p>Lorem ispum dolor sit amet constectetur adipisicing elit. Voluptas voluptatem magin soluta ipsm, praesentium nemo saep fugit mollitia explicabo qepudiandea enim croporis, ipsa labor quibusdam eaque quod ex eum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectture adipisicing elit. Quesi iusto queam officis commedit expedite atque fugit vitea doloribus?
          </p>

          <Button title = "Learn More"/>
        </div>
      </div>
    </div>
  )
}

export default About
