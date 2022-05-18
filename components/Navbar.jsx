import Hamburger from 'hamburger-react'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false)


  return <nav className='h-[100px] px-5 md:px-12 bg-primary grid grid-cols-5 items-center justify-between sticky top-0 z-50'>
    <div className="col-span-3 md:col-span-1 flex items-center ">
      <div className="bg-white rounded-full p-2 h-10 w-10  ">
        <Image src="/assets/telephone.png" alt="tele" width={32} height={32} />
      </div>
      <div className='ml-5 text-white'>
        <div className='font-semibold text-sm'>Order Now</div>
        <div className='font-bold text-lg'>012 345 6789</div>
      </div>
    </div>
    <div className="text-white hidden  md:col-span-3 md:mx-auto md:flex items-center">
      <ul className='list-none p-0 flex items-center  font-semibold'>
        <li className='mr-5'>Homepage</li>
        <li className='mr-5'>Products</li>
        <li className=' mr-5'>Menu</li>
        <Image src="/assets/logo.png" width="80px" height="80px" alt='logo' />
        <li className='mx-5'>Blog</li>
        <li className='mr-5'>Events</li>
        <li className='mr-5'>Contact</li>
      </ul>
    </div>
    <div style={{ justifyContent: 'flex-end' }} className="flex items-center col-span-2 md:col-span-1">
      <>
        <div className='relative'>
          <Image src="/assets/cart.png" width="30px" height="30px" alt='cart' />
          <div className='counter p-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-primary font-bold'>2</div>
        </div>
        <div className="md:hidden ml-3 text-white " >
          <Hamburger hideOutline={false} toggled={isOpen} toggle={setIsOpen} />
        </div>
      </>
    </div>

    

  </nav>
}
