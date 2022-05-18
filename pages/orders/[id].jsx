import React from 'react'
import Image from 'next/image'
export default function Orders() {
    const status = 0
    const statusClass = index => {
        if (index - status < 1) return "orderDone"
        if (index - status === 1) return "orderInProgress"
        if (index - status > 1) return "orderUndone"
    }
    return (
        <div className='p-6 md:p-12 flex flex-col md:flex-row'>
            <div style={{ flex: 2 }} className="left">
                <div className="row">
                    <table className='w-full  md:mb-12 text-left'>
                        <thead className='hidden md:table-header-group '>
                            <tr className="font-semibold">
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tr className='flex flex-col md:table-row pb-8 md:pb-0 '>
                            <td>
                                <span className='md:hidden capitalize font-medium'>Order ID: </span>
                                <span className='uppercase text-primary font-semibold text-lg '>65542848452</span>
                            </td>
                            <td>
                                <span className='md:hidden capitalize font-medium'>Customer: </span>
                                <span className='uppercase font-semibold text-lg '>Jhon Denver</span>
                            </td>
                            <td>
                                <span className='md:hidden capitalize font-medium'>Address: </span>
                                <span className='uppercase font-semibold text-lg '>1614 E. Erwin St #104.</span>
                            </td>

                            <td>
                                <span className='md:hidden capitalize font-medium'>Total: </span>
                                <span className='uppercase font-semibold text-xl '>$ 38.8</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="row grid grid-cols-2 md:grid-cols-4 items-center w-[80%] py-6 md:py-0 mx-auto md:mx-0 ">
                    <div className={statusClass(0)}>
                        <Image src="/assets/paid.png" width={30} height={30} alt="done" />
                        <span>Payment</span>
                        <div className="checked">
                            <Image src="/assets/checked.png" width={20} height={20} alt="done" />
                        </div>
                    </div>

                    <div className={statusClass(1)}>
                        <Image src="/assets/bake.png" width={30} height={30} alt="done" />
                        <span>Preparing</span>
                        <div className="checked">
                            <Image src="/assets/checked.png" width={20} height={20} alt="done" />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/assets/bike.png" width={30} height={30} alt="done" />
                        <span>On the Way</span>
                        <div className="checked">

                            <Image src="/assets/checked.png" width={20} height={20} alt="done" />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/assets/delivered.png" width={30} height={30} alt="done" />
                        <span>Delivered</span>
                        <div className="checked">

                            <Image src="/assets/checked.png" width={20} height={20} alt="done" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ flex: 1 }} className="">
                <div className="wrapper">
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
                        <button disabled className='uppercase h-7 mt-5 bg-white text-teal-400 cursor-not-allowed font-bold'>paid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
