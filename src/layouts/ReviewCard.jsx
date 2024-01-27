import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='flex flex-col w-full lg:w-2/4 bg-white rounded-lg gap-5 p-2'>
      <div className='flex flex-row items-center lg:justify-start justify-center'>
        <div className='w-1/4'>
          <img className='rounded-full' src={props.img} alt="img" />
        </div>
        <div className='mx-3'>
          <h2 className='font-semibold text-lg'>{props.title}</h2>
          <div className='flex flex-row'>
            <i className="fa-solid fa-star text-brightColor"></i>
            <i className="fa-solid fa-star text-brightColor"></i>
            <i className="fa-solid fa-star text-brightColor"></i>
            <i className="fa-solid fa-star text-brightColor"></i>
            <i class="fa-solid fa-star-half-stroke text-brightColor"></i>
          </div>
        </div>
        <span className='ml-16'>
        <i className="fa fa-quote-right text-backgroundColor text-xl" aria-hidden="true"></i>
        </span>
      </div>
      <p>Lorem ispum dolor sit amet constectetur adipisicing elit. Voluptas voluptatem magin soluta ipsm, praesentium nemo saep fugit mollitia explicabo qepudiandea enim croporis, ipsa labor quibusdam eaque quod ex eum? </p>
    </div>
  )
}

export default ReviewCard
