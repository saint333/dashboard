"use client";
import { menuCase } from "@/context/common/MenuConstants";
import { useMenuProvider } from "@/context/menu/MenuContext";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Menu from "./menu";

export default function Header() {
  const [{ toggled }, dispatch] = useMenuProvider();
const router = useRouter();
  return (
    <div className='sticky top-0 py-2 md:py-4 md:px-7 border-b border-gray-400 bg-white w-full'>
      <div className='flex justify-between items-center'>
        <button
          className='text-2xl text-[#FF66C4]'
          onClick={() => {
            toggled
              ? dispatch({ type: menuCase.TOGGLED })
              : dispatch({ type: menuCase.COLLAPSED });
          }}
        >
          <IoIosMenu />
        </button>
        <Image
          src='/icons/logo.png'
          alt='logo'
          priority
          width={150}
          height={50}
          className='m-auto md:hidden'
          onClick={() => router.push('/dashboard')}
        />
        <div className="flex items-center">
          <button className='text-2xl text-[#FF66C4] md:hidden'>
            <BsThreeDotsVertical />
          </button>
          <div className="hidden md:block">
            <Menu />
          </div>
        </div>
      </div>
      <div className="md:hidden py-2 ">
        <Menu />
      </div>
    </div>
  );
}
