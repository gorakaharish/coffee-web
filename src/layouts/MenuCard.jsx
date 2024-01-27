import React from 'react'

const MenuCard = (props) => {
    return (
        <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
            <div>
                <img src= {props.img} alt="" className='rounded-xl' />
            </div>
            <div className='p-2 mt-5'>
                <div className='flex flex-row justify-between'>
                    <h3 className='font-semibold text-xl'> {props.title} </h3>
                    <h3 className='font-semibold text-xs'> {props.value} </h3>
                </div>
                <div className='flex flex-row justify-between mt-3'>
                    <div className='flex gap-2'>
                        <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor rounded-lg'>Hot</button>
                        <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor rounded-lg'>Cold</button>
                    </div>
                    <span className='flex items-center bg-backgroundColor px-3 py-2 rounded-full coursor-pointer'>
                        <i class="fa-solid fa-cart-shopping text-xl"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
