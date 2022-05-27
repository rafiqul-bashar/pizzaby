import Hamburger from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { logOut } from '../redux/adminSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function Navbar() {


  const [isOpen, setIsOpen] = React.useState(false)
  const quantity = useSelector((state) => state.cart.quantity);
  const admin = useSelector((state) => state.user.admin);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut())
    alert("logOut")
  }

  return <nav className='h-[100px] px-5 md:px-12 bg-primary grid grid-cols-4 md:grid-cols-5 items-center justify-between sticky top-0 z-50'>
    <div className="col-span-2 md:col-span-1 flex items-center ">
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

        <Image src="/assets/logo.png" width="80px" height="80px" alt='logo' />
        <Link href="/">
          <li className='cursor-pointer mr-5'>Home</li>
        </Link>
        <Link href="/#products">
          <li className='cursor-pointer mr-5'>Menu</li>
        </Link>
        {
          admin ? <Link href="/admin">
            <li className='cursor-pointer mr-5'>Products</li>
          </Link> :
            <Link href="/#products">
              <li className='cursor-pointer mr-5'>Products</li>
            </Link>
        }
        <Link href="/#contact">
          <li className='cursor-pointer mr-5'>Contact</li>
        </Link>
        {admin &&
          <button className="font-bold" onClick={handleLogout}>
            Logout
          </button>
        }
      </ul>
    </div>
    <div style={{ justifyContent: 'flex-end' }} className="flex items-center col-span-2 md:col-span-1">

      <div onClick={e => router.push("/cart")}>
        <div className='relative cursor-pointer'>
          <Image src="/assets/cart.png" width="30px" height="30px" alt='cart' />
          <div className='counter p-1 bg-white rounded-full w-5 h-5 flex items-center justify-center text-primary font-bold'>{quantity}</div>
        </div>
      </div>

      <div className="md:hidden ml-3 text-white " >
        <Hamburger hideOutline={false} toggled={isOpen} toggle={setIsOpen} />
      </div>
    </div>
    {/* Mobile Menu */}

    {isOpen && (
      <div className="text-white md:hidden absolute top-[90%] w-full h-[20vh] bg-primary ">
        <ul onClick={() => setIsOpen(false)} className='list-none p-0 flex px-16 flex-col font-semibold space-y-4'>
          <Link href="/">
            <li className='cursor-pointer mr-5'>Home</li>
          </Link>
          <Link href="/#products">
            <li className='cursor-pointer mr-5'>Products</li>
          </Link>
          <Link href="/#products">
            <li className='cursor-pointer mr-5'>Menu</li>
          </Link>
          <Link href="/#contact">
            <li className='cursor-pointer mr-5'>Contact</li>
          </Link>
          {admin &&
            <button className="font-bold" onClick={handleLogout}>
              Logout
            </button>
          }
        </ul>

      </div>
    )

    }


  </nav>
}
