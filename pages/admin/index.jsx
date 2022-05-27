import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { AddBtn, AddProduct } from "../../components"
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
export default function index({ products, orders }) {

    const [pizzalist, setPizzalist] = useState(products)
    const [orderlist, setOrderlist] = useState(orders)
    const [disabledBtn, setDisabledBtn] = useState(false)
    const status = ["preparing", "on the way", "delivered"]
    const [close, setClose] = useState(true)
    const [deleteClose, setDeleteClose] = useState(true)
    const [singlePizzaId, setSinglePizzaId] = useState("")
    const router =useRouter()
    const admin = useSelector((state) => state.user.admin);
    React.useEffect(() => {
        if (!admin) {
            router.push('/admin/login') // redirects if there is no user
        }
    }, [admin])
    if (!admin) {
        return null
    }
    const handleDeleteModal = (spId) => {
        setSinglePizzaId(spId)
        setDeleteClose(false)
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/products/${id}`)
            setPizzalist(pizzalist.filter(pizza => pizza._id !== id))
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteClose(true)
        }
    }

    const handleStatus = async (id) => {
        const item = orderlist.filter(order => order._id === id)[0]
        const currentStatus = item.status[0]

        if (currentStatus == 1) {
            setDisabledBtn(true)
        }
        try {
            const res = await axios.put(`http://localhost:3000/api/orders/${id}`, { status: currentStatus + 1 })
            setOrderlist([
                res.data,

                ...orderlist.filter(order => order._id !== id)
            ])
            alert("Status Updated")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AddBtn setClose={setClose} />
            <div className='p-4 md:p-12 grid grid-cols-1 md:grid-cols-2'>
                <div className='item'>
                    <h1 className='text-3xl font-bold my-5'>Products</h1>
                    <table className='w-full  md:mb-12 text-left'>
                        <thead className='table-header-group '>
                            <tr className="font-semibold">
                                <th>Image</th>
                                <th>Title</th>
                                <th>Id</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pizzalist.map((pizza) => (
                                <tr key={pizza._id} className="font-semibold">
                                    <td className='pt-1'>
                                        <Image src={pizza.img} width={60} height={40} objectFit="cover" alt={pizza.title} />
                                    </td>
                                    <td>{pizza.title}</td>
                                    <td>{`${pizza._id}`.slice(0, 5)}...</td>
                                    <td>$ {pizza.prices[0]}</td>
                                    <td className='flex flex-col md:flex-row items-center'>

                                        <button onClick={() => handleDeleteModal(pizza._id)} className='ml-2 px-2 py-1 text-white bg-red-500'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className='item'>
                    <h1 className='text-3xl font-bold  my-5'>Orders</h1>
                    <table className='w-full  md:mb-12 text-left'>
                        <thead className='table-header-group '>
                            <tr className="font-semibold">
                                <th>OrderId</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {orderlist.map((order) => (
                                <tr key={order._id} className="font-semibold">
                                    <td className='pt-1'>{"35346548465469".slice(0, 5)}...</td>
                                    <td>{order.customer}</td>
                                    <td>$ {order.total}</td>
                                    <td>{order.method === 0 ? (<span>Cash</span>) : (<span>paid</span>)}</td>
                                    <td>{status[order.status]}</td>
                                    <td>
                                        <button disabled={disabledBtn} onClick={() => handleStatus(order._id)} className='px-2 py-1 text-white bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed'>
                                            Next Stage
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {!close &&
                <AddProduct setClose={setClose} />
            }

            {!deleteClose &&
                <div className="w-[100vw] h-[100vh] bg-[#00000080] fixed top-0 z-[999] flex items-center justify-center">
                    <div className="w-[500px] bg-white py-4 px-12 flex flex-col justify-between relative">
                        <span onClick={() => setDeleteClose(true)} className="h7 w-7 bg-black text-white flex items-center justify-center cursor-pointer absolute top-[6px] right-[6px]">
                            X
                        </span>
                        <h1 className='text-center text-2xl '>Remove Product Permanently?</h1>
                        <div className='flex items-center my-2 justify-around'>
                            <button onClick={() => handleDelete(singlePizzaId)} className='w-[80px] h-[25px] text-white bg-red-400'>Yes</button>
                            <button onClick={() => setDeleteClose(true)} className='w-[80px] h-[25px] text-white bg-indigo-400'>No</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export const getServerSideProps = async () => {
    const productsRes = await axios.get("http://localhost:3000/api/products")
    const ordersRes = await axios.get("http://localhost:3000/api/orders")
    return {
        props: {
            products: productsRes.data,
            orders: ordersRes.data
        }
    }
}
