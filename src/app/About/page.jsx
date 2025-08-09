import React from 'react'

import img from '../../../public/next.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className='font-bold text-5xl'>Welcom to About</h1>
        <Image src={img} alt='Test'/>
    </div>
  )
}

export default page