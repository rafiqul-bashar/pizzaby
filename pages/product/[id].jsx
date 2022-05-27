import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice' 

export default function Product({ product }) {
    const { title, desc, prices, img, extraOptions, _id } = product
    const [price, setPrice] = React.useState(prices[0])
    const [sizeIndex, setSizeIndex] = React.useState(0)
    const [quantity, setQuantity] = React.useState(1);
    const [extras, setExtras] = React.useState([]);

    const dispatch = useDispatch();
    const changePrice = (num) => {
        setPrice(price + num)
    }

    const handleSize = (size) => {
        const diff = prices[size] - prices[sizeIndex]
        setSizeIndex(size)
        changePrice(diff)
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(option.price);
            setExtras((prev) => [...prev, option]);
        } else {
            changePrice(-option.price);
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...product, extras, price, quantity}));
        // console.log(_id);
    };
    return (
        <div className='h-auto  md:h-[calc(100vh-100px)] flex flex-col md:flex-row'>
            <div style={{ flex: 1 }} className="left h-full flex items-center justify-center ">
                <div className="w-[50vw] mt-5 md:mt-0 h-[40vh] md:w-[80%] md:h-[70%] relative">
                    <Image src={img} layout="fill" alt="product" />
                </div>
            </div>
            <div style={{ flex: 1 }} className="flex flex-col justify-center space-y-4 py-5 px-2 md:py-0 md:px-0 text-center md:text-left">
                <h1 className=' uppercase font-bold text-4xl'>{title}</h1>
                <span className='w-20 py-1 font-semibold text-2xl md:text-3xl text-primary border-b-2 border-primary'>$ {price}</span>
                <p className='desc'> {desc}</p>
                <h3 className='text-xl md:text-lg capitalize font-bold'>Choose the size</h3>
                <div className="w-full px-5 md:px-0 md:w-[40%] flex items-center justify-between ">
                    <div onClick={() => handleSize(0)} className="w-[30px] h-[30px] relative cursor-pointer size">
                        <Image src="/assets/size.png" alt="size" layout='fill' />
                        <span className="productSize">Small</span>
                    </div>
                    <div onClick={() => handleSize(1)} className="w-[40px] h-[40px] relative cursor-pointer size">
                        <Image src="/assets/size.png" alt="size" layout='fill' />
                        <span className="productSize">Medium</span>
                    </div>
                    <div onClick={() => handleSize(2)} className="w-[50px] h-[50px] relative cursor-pointer size">
                        <Image src="/assets/size.png" alt="size" layout='fill' />
                        <span className="productSize">Large</span>
                    </div>
                </div>
                <h3 className='text-xl md:text-lg capitalize font-bold'>Choose addition ingredients</h3>
                <div className="flex flex-col mx-auto md:mx-0 md:flex-row mb-7">
                    {
                        extraOptions.map((item, index) => (
                            <div key={index} className="flex items-center  text-lg md:text-base mr-5 font-medium">

                                <input onChange={(e) => handleChange(e, item)} type="checkbox" id={index} name={index} className='checkbox' />
                                <label htmlFor={index}>{item.text}</label>
                                <h2 className='ml-2'>$ {item.price}</h2>

                            </div>
                        ))
                    }
                </div>
                <div className="add">
                    <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className="w-[50px] h-[50px] md:h-[30px]" />
                    <button onClick={handleClick} className='h-[50px] md:h-[30px] px-2 bg-primary text-white ml-3 font-medium cursor-pointer'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://pizzaby.vercel.app/api/products/${params.id}`)
    return {
        props: {
            product: res.data
        }
    }
}
