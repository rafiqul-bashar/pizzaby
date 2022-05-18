import Image from 'next/image'
import React from 'react'

export default function Product() {
    const [sizeIndex, setSizeIndex] = React.useState(0)
    const pizza = {
        id: 1,
        img: "/assets/pizza.png",
        name: "Campagnola",
        price: [19.9, 23.9, 27.8],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis quibusdam eius! met consectetur adipisicing elit. Itaque corporis "
    }

    return (
        <div className='h-auto  md:h-[calc(100vh-100px)] flex flex-col md:flex-row'>
            <div style={{ flex: 1 }} className="left h-full flex items-center justify-center ">
                <div className="w-[50vw] mt-5 md:mt-0 h-[40vh] md:w-[80%] md:h-[80%] relative">
                    <Image src={pizza.img} layout="fill" alt="product" />
                </div>
            </div>
            <div style={{ flex: 1 }} className="flex flex-col justify-center space-y-4 py-5 px-2 md:py-0 md:px-0 text-center md:text-left">
                <h1 className=' uppercase font-bold text-4xl'>{pizza.name}</h1>
                <span className='w-20 py-1 font-normal text-2xl text-primary border-b border-primary'>$ {pizza.price[sizeIndex]}</span>
                <p className='desc'> {pizza.desc}</p>
                <h3 className='text-xl md:text-lg capitalize font-bold'>Choose the size</h3>
                <div className="w-full px-5 md:px-0 md:w-[40%] flex items-center justify-between ">
                    <div onClick={() => setSizeIndex(0)} className="w-[30px] h-[30px] relative cursor-pointer size">
                        <Image src="/assets/size.png" alt="size" layout='fill' />
                        <span className="productSize">Small</span>
                    </div>
                    <div onClick={() => setSizeIndex(1)} className="w-[40px] h-[40px] relative cursor-pointer size">
                        <Image src="/assets/size.png" alt="size" layout='fill' />
                        <span className="productSize">Medium</span>
                    </div>
                    <div onClick={() => setSizeIndex(2)} className="w-[50px] h-[50px] relative cursor-pointer size">
                        <Image src="/assets/size.png" alt="size" layout='fill' />
                        <span className="productSize">Large</span>
                    </div>
                </div>
                <h3 className='text-xl md:text-lg capitalize font-bold'>Choose addition ingredients</h3>
                <div className="flex flex-col mx-auto md:mx-0 md:flex-row mb-7">
                    <div className="flex items-center text-lg md:text-base mr-3 font-medium">
                        <input type="checkbox" id="double" name="double" className='checkbox' />
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className="flex items-center text-lg md:text-base mr-3 font-medium">
                        <input type="checkbox" id="cheese" name="cheese" className='checkbox' />
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className="flex items-center text-lg md:text-base mr-3 font-medium">
                        <input type="checkbox" id="spicy" name="spicy" className='checkbox' />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className="flex items-center text-lg md:text-base mr-3 font-medium">
                        <input type="checkbox" id="garlic" name="garlic" className='checkbox' />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className="add">
                    <input type="number" defaultValue={1} className="w-[50px] h-[50px] md:h-[30px]" />
                    <button className='h-[50px] md:h-[30px] px-2 bg-primary text-white ml-3 font-medium cursor-pointer'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
