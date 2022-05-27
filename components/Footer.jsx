import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return <footer id='contact' className="h-auto  md:h-[calc(100vh-100px)] bg-[#222] flex">
    <div style={{ flex: 1 }} className="relative hidden md:flex">
      <Image src="/assets/bg.png" objectFit="cover" layout="fill" alt="" />
    </div>
    <div style={{ flex: 2 }} className="relative flex flex-col md:flex-row justify-between p-8 text-center md:text-left md:p-12 space-y-5 md:space-y-0">
      <div style={{ flex: 1 }} className="px-5">
        <h2 className="uppercase text-gray-300 text-3xl font-bold">
          Good quality, good food, good mood .
        </h2>
      </div>
      <div style={{ flex: 1 }} className="px-5 space-y-5">
        <h1 className="text-2xl text-orange-400 font-semibold uppercase">FIND OUR RESTAURANTS</h1>
        <p className="text-gray-400"> Don Road #304.
          <br /> NewYork, 85022
          <br /> (602) 867-1010
        </p>
        <p className="text-gray-400">
          2356 K. Laquie Rd #235.
          <br /> NewYork, 85022
          <br /> (602) 867-1011
        </p>
        <p className="text-gray-400">
          1614 E. Erwin St #104.
          <br /> NewYork, 85022
          <br /> (602) 867-1012
        </p>
        <p className="text-gray-400">
          1614 W. Caroll St #125.
          <br /> NewYork, 85022
          <br /> (602) 867-1013
        </p>
      </div>
      <div style={{ flex: 1 }} className="px-5 space-y-5">
        <h1 className="text-2xl text-orange-400 font-semibold uppercase">WORKING HOURS</h1>
        <p className="text-gray-400">
          MONDAY UNTIL FRIDAY
          <br /> 9:00 – 22:00
        </p>
        <p className="text-gray-400">
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
    </div>
  </footer >
}
