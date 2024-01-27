import React from 'react'
import Button from './Button'


const ProductCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <img className='rounded-lg' src= {props.img} alt="image" />
      <div className='flex flex-col  items-center mt-5 gap-3'>
        <h2 className='font-semibold text-xl'>{props.title}</h2>
        <div>
        <i className="fa-solid fa-star text-brightColor"></i>
        <i className="fa-solid fa-star text-brightColor"></i>
        <i className="fa-solid fa-star text-brightColor"></i>
        <i className="fa-solid fa-star text-brightColor"></i>
        <i class="fa-solid fa-star-half-stroke text-brightColor"></i>
        </div>
        <h3 className='font-semibold text-lg'>$15.99</h3>
        <Button title="ADD TO CARD" />
      </div>
    </div>
  )
}

export default ProductCard
