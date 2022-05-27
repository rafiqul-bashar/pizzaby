import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EditProduct({ setEditClose, singlePizzaId }) {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);
    const [pizza, setPizza] = useState({});


    useEffect(() => {
        const fetchSinglePizza = async (singlePizzaId) => {
            const res = await axios.get("http://localhost:3000/api/products/" + singlePizzaId)
            setPizza(res.data)
        }
        fetchSinglePizza(singlePizzaId)
    }, [singlePizzaId])


    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        
        data.append("upload_preset", "uploads");
        try {
        if(!file===null){
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/dxoljtuio/image/upload",
                data
            );

            const { url } = uploadRes.data;
            const updatedProduct = {
                title,
                desc,
                prices,
                extraOptions,
                img: url,
            };
            
            await axios.put("http://localhost:3000/api/products/" + singlePizzaId, updatedProduct);
            setClose(true);
        }
        const updatedProduct = {
            title,
            desc,
            prices,
            extraOptions,
        };
        
        await axios.put("http://localhost:3000/api/products/" + singlePizzaId, updatedProduct);
        setClose(true);
        } catch (err) {
            console.log(err);
        }
    };
console.log(pizza.prices[0]);
console.log(pizza.prices[1]);
console.log(pizza.prices[2]);

    return (
        <div className="w-[100vw] h-[100vh] bg-[#00000080] fixed top-0 z-[999] flex items-center justify-center">
            <div className="w-[500px] bg-white py-4 px-12 flex flex-col justify-between relative">
                <span onClick={() => setEditClose(true)} className="h7 w-7 bg-black text-white flex items-center justify-center cursor-pointer absolute top-[6px] right-[6px]">
                    X
                </span>
                <h1 className='text-2xl my-1 font-bold text-center'>Edit Pizza Details</h1>
                <div className="flex flex-col mb-2">
                    <label className="mb-1 font-sm font-normal">Choose an image</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1 font-sm font-normal">Title</label>
                    <input
                        className="border-0  outline-none"
                        type="text"
                        defaultValue={pizza?.title}
                        placeholder='Product Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1 font-sm font-normal">Desc</label>
                    <textarea
                        rows={4}
                        placeholder="Description"
                        type="text"
                        defaultValue={pizza?.desc}
                        className='focus:outline-none'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1 font-sm font-normal">Prices</label>
                    <div className="flex justify-between">
                        <input
                            className="border-0  outline-none w-[25%]"
                            type="number"
                            placeholder="Small"
                            defaultValue={pizza?.prices}
                            onChange={(e) => changePrice(e, 0)}
                        />
                        <input
                            className="border-0  outline-none w-[25%]"
                            type="number"
                            placeholder="Medium"
                            defaultValue={pizza?.prices[0]}
                            onChange={(e) => changePrice(e, 1)}
                        />
                        <input
                            className="border-0  outline-none w-[25%]"
                            type="number"
                            placeholder="Large"
                            defaultValue={pizza?.prices[2]}
                            onChange={(e) => changePrice(e, 2)}
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1 font-sm font-normal">Extra</label>
                    <div className="flex justify-between">
                        <input
                            className="border-0 capitalize outline-none w-[25%]"
                            type="text"
                            placeholder="Item"
                            name="text"
                            onChange={handleExtraInput}
                        />
                        <input
                            className="border-0  outline-none w-[25%]"
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={handleExtraInput}
                        />
                        <button className="w-[25%] font-semibold border border-black text-black cursor-pointer py-1" onClick={handleExtra}>
                            Add
                        </button>
                    </div>
                    <div className="my-2 flex flex-wrap">
                        {pizza?.extraOptions.map((option) => (
                            <span key={option.text} className="p-1 capitalize font-sm bg-white text-red-400 cursor-pointer">
                                {option.text}
                            </span>
                        ))}
                    </div>
                </div>
                <button className="w-full font-semibold border-0 bg-teal-500 text-white cursor-pointer py-1" onClick={handleCreate}>
                    Update
                </button>
            </div>
        </div>
    )
}
