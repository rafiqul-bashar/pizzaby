import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from '../components/OrderDetail';


export default function cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const router = useRouter();
    const [open, setOpen] = React.useState(false)
    const [cash, setCash] = React.useState(false)


    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders", data)
            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };


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
                    <tbody>

                        {cart.products?.map(product => (

                            <tr key={product._id} className='flex flex-col md:table-row pb-8 md:pb-0'>
                                <td >
                                    <div className="w-[60vw] h-[30vh] my-2 md:w-[100px] md:h-[100px] relative mx-auto">
                                        <Image src={product?.img} alt="product" layout='fill' objectFit='contain' />
                                    </div>
                                </td>
                                <td>
                                    <span className='md:hidden capitalize'>Name: </span>
                                    <span className='uppercase text-primary font-semibold text-lg'>{product?.title}</span>
                                </td>
                                <td>
                                    <span className='md:hidden capitalize'>Extras: </span>
                                    {product?.extras.map(extra => (

                                        <span key={extra._id} className='font-semibold text-lg'>{extra.text}</span>
                                    ))}
                                </td>
                                <td>
                                    <span className='capitalize font-medium md:hidden'>Price:</span>
                                    <span className='text-lg font-semibold'>  $ {product?.quantity}</span>
                                </td>
                                <td>
                                    <span className='capitalize font-medium md:hidden'>Quantity:</span>
                                    <span className='text-lg font-semibold'>  {product.quantity} </span>
                                </td>
                                <td>
                                    <span className='capitalize font-medium md:hidden'>Total:</span>
                                    <span className='font-semibold text-lg'>$ {product.quantity * product.price}</span>
                                </td>

                            </tr>

                        ))}
                        {/* Table Contents Ends */}
                    </tbody>
                </table>

                {/* Table Ends */}
            </div>
            <div style={{ flex: 1 }} className="flex justify-center ">
                <div className="w-[90%] max-h-[320px] bg-[#333] p-12 pt-3 flex flex-col justify-between text-white">
                    <h2 className="text-2xl mb-4 uppercase font-bold">Cart Total</h2>
                    <div className="mr-3">
                        <b>Subtotal:</b> $ {cart.total}
                    </div>
                    <div className="mr-3">
                        <b>Discount:</b> $ 0.0
                    </div>
                    <div className="mr-3">
                        <b>Total:</b> $ {cart.total}
                    </div>
                    {open ?
                        (<div className='flex flex-col gap-1 '>
                            <button onClick={() => setCash(true)} className='mt-2 px-2 py-1 cursor-pointer bg-black font-bold text-white'>
                                Cash On Delivery
                            </button>

                        </div>)
                        : (<button
                            className="px-2 py-1 cursor-pointer mt-2 bg-white font-bold text-primary"
                            onClick={() => setOpen(true)}
                        >
                            Checkout Now
                        </button>)
                    }
                </div>
            </div>
            {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
        </div>
    )
}
