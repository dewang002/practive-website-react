import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


function Nav() {
  return (
    <div className='fixed z-50 w-full'>
        <div className='grid grid-cols-12 p-2 bg-blue-900 text-white'>
        <div className='col-span-8'></div>
        <div className='col-span-4 flex gap-2'>
            <div className="email flex items-center gap-2"><MdEmail size={"1.5vw"} /> www.registarkarliya.com</div> |
            <div className="email flex items-center gap-2"><IoCallSharp size={"1.5vw"} /> 917505057601 </div> |
            <div className='flex items-center justify-center gap-4 p-1'>
                <span className='text-xl'><FaInstagram/></span>
                <span className='text-xl'><FaFacebook/></span>
                <span className='text-xl'><FaTwitter/></span>
            </div>
        </div>
        </div>
        <div className='nav grid grid-cols-12 px-10 py-4 bg-white'>
          <div className='col-span-6 pl-14 py-4'>
            <img src="/logo_logo 1.png" alt="" />
          </div>
          <div className='col-span-6 flex items-center gap-4'>
            <ul className='flex gap-8 font-medium text-lg cursor-pointer'>
              <li>Home</li>
              <li className='flex items-center gap-2'>Our Service <span><IoIosArrowDown/></span></li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
            <button className='font-bold'><CiSearch size={"1.5vw"} /></button>
            <button className='px-6 py-4 text-white font-bold rounded-md bg-yellow-600'>Talk To Expert</button>
          </div>
        </div>
    </div>
  )
}

export default Nav