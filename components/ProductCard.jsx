import Image from 'next/image'
import React from 'react'

export default function ProductCard() {
    return (
        <div className='w-full md:w-[22%] flex flex-col items-center justify-center py-5 px-10'>
            <Image src="/assets/pizza.png" width="500" height="500" alt="pizza" />
            <h1 className='uppercase text-primary font-bold text-3xl md:text-xl'>fiorza di zucca</h1>
            <span className='text-gray-700 font-bold text-2xl md:text-xl'>$ 19.90</span>
            <p className='text-gray-800 text-center text-2xl md:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vel.
            </p>
        </div>
    )
}
