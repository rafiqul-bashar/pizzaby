import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products}) {
    return (
        <div className='py-5 px-3 flex flex-col items-center'>
            <h1 className='tex-center font-bold text-3xl text-[#222] md:text-left'>Best Pizza In Town</h1>
            <p className='text-xl text-gray-700 text-center w-[90%] md:w-[70%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum quidem ipsam provident at ab sit atque debitis impedit, vel incidunt tenetur numquam qui voluptatem error fugit omnis. Vitae, voluptatibus!
            </p>
            <div className='grid grid-col-1 md:grid-cols-3 w-full'>
            {products?.map((item,index)=>(
                <ProductCard key={index} product={item} />
            ))}
            
            </div>
        </div>
    )
}
