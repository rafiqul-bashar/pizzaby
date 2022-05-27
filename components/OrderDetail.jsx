import React, { useState } from 'react'

export default function OrderDetail({total,createOrder}) {
    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handleClick = () => {
        createOrder({customer,address,total,method:1})
    }


    return (
        <div className='w-full h-[100vh] absolute z-[999] top-0 left-0 flex items-center justify-center bg-[#00000080]'>
            <div className='flex flex-col p-12 bg-white items-center justify-center  '>
                <h1 className='font-light text-2xl mb-2'>You have to pay $ {total} after Delivery</h1>
                <div className='w-full flex flex-col'>
                    <label htmlFor="" className='label'>Name Surname</label>
                    <input type="text" placeholder='Jhony Depp' className='h-10 p-1 mt-2 mb-1' onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="" className='label'>Phone Number</label>
                    <input type="text" placeholder='+1 234 5678' className='h-10 p-1 mt-2 mb-1' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='w-full flex flex-col'>
                    <label htmlFor="" className='label'>Address </label>
                    <textarea
                        rows={5}
                        placeholder="Elton St. 505 NY"
                        type="text" className='resize-none p-1 mt-2 mb-1' onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button onClick={handleClick} className="bg-primary text-white w-full mt-2 py-1 font-bold text-lg    ">
                    Order
                </button>
            </div>
        </div>
    )
}
