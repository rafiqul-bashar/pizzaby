import React from 'react'

export default function AddBtn({setClose}) {
  return (
    <button onClick={()=>setClose(false)} className='bg-primary mt-5 mx-5 w-[150px] text-center cursor-pointer text-white px-4 py-2 font-semibold'>Add New Pizza</button>
  )
}
