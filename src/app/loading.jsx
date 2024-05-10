import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <section className='grid items-center justify-center h-screen w-screen bg-slate-700'>
      <div className='transition duration-500 ease-in-out transform animate-pulse'>
        <Image src="/icons/logo.png" alt="logo" width={200} height={50} priority/>
      </div>
    </section>
  )
}
