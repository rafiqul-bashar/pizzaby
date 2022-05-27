import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function ProductCard({ product }) {

    const { title, desc, prices, img ,_id} = product
    
    return (
        <div className='w-full flex flex-col items-center md:items-start  text-center md:text-left pt-5 px-10'>
            <Link href={`/product/${_id}`} passHref>
            <Image src={img} width="500" height="300" alt="pizza" objectFit='contain' />
            </Link>
            <h1 className='uppercase text-primary text-left font-bold text-3xl md:text-xl'>{title}</h1>
            <span className='text-gray-700 font-bold text-2xl md:text-xl'>$ {prices[0]}</span>
            <p className='text-gray-800  text-2xl md:text-lg'>
                {desc}
            </p>
        </div>
    )
}
