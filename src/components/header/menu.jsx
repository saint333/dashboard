"use client";
import { CiGlobe } from "react-icons/ci";
import { BiExitFullscreen, BiMoon, BiSun } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

export default function Menu() {
  return (
    <div className='flex items-center gap-4 flex-row flex-wrap md:flex-nowrap'>
      <CiGlobe className='text-2xl text-[#FF66C4]' />
      <select className='border border-gray-400 px-3 py-1 rounded-md text-gray-500 outline-none'>
        <option value=''>tienda 3</option>
        <option value=''>tienda 2</option>
      </select>
      <select className='border border-gray-400 px-3 py-1 rounded-md text-gray-500 outline-none'>
        <option value=''>tienda 1</option>
        <option value=''>tienda 2</option>
      </select>
      <BiMoon className='text-2xl text-[#FF66C4]' />
      <BiSun className='text-2xl text-[#FF66C4]' />
      <BiExitFullscreen className='text-2xl text-[#FF66C4]' />
      <FaUserCircle className='text-2xl text-[#FF66C4]' />
    </div>
  );
}
