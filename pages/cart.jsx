import Image from 'next/image'
import React from 'react'

export default function cart() {
    return (
        <div className='container p-5 md:p-12 flex flex-col md:flex-row'>
            <div style={{ flex: 2 }}>
                <table className='w-full'>
                    {/* Table */}
                    <thead className='hidden md:table-header-group'>
                        <tr className="font-semibold ">
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    {/* Table Items */}

                    <tr className='flex flex-col md:table-row pb-8 md:pb-0'>
                        <td >
                            <div className="w-[60vw] h-[30vh] my-2 md:w-[100px] md:h-[100px] relative mx-auto">
                            <Image src="/assets/pizza.png" alt="product" layout='fill' objectFit='contain' />
                            </div>
                        </td>
                        <td>
                        <span className='md:hidden capitalize'>Name: </span>
                            <span className='uppercase text-primary font-semibold text-lg'>CORLAZO</span>
                        </td>
                        <td>
                            <span className='md:hidden capitalize'>Extras: </span>
                            <span className='font-semibold text-lg'>Double Ingredients, Spicy Sauce</span>
                        </td>
                        <td>
                            <span className='capitalize font-medium md:hidden'>Price:</span>
                            <span className='text-lg font-semibold'>  $ 19.9</span>
                        </td>
                        <td>
                            <span className='capitalize font-medium md:hidden'>Quantity:</span>
                            <span className='text-lg font-semibold'>  2 </span>
                        </td>
                        <td>
                            <span className='capitalize font-medium md:hidden'>Total:</span>
                            <span className='font-semibold text-lg'>$ 38.8</span>
                        </td>

                    </tr>

                    {/* Table Contents Ends */}
                </table>

                {/* Table Ends */}
            </div>
            <div style={{ flex: 1 }} className="flex justify-center ">
                <div className="w-[90%] max-h-[300px] bg-[#333] p-12 pt-3 flex flex-col justify-between text-white">
                    <h2 className="text-2xl mb-4 uppercase font-bold">Cart Total</h2>
                    <div className="mr-3">
                        <b>Subtotal:</b> $ 38.8
                    </div>
                    <div className="mr-3">
                        <b>Discount:</b> $ 0.0
                    </div>
                    <div className="mr-3">
                        <b>Total:</b> $ 38.8
                    </div>
                    <button className='uppercase h-7 mt-5 bg-white text-primary font-bold cursor-pointer'>checkout now!</button>
                </div>
            </div>
        </div>
    )
}
