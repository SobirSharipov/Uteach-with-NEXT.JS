import React from 'react'
import img from '../../public/img1 (10).svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='bg-[#0F172A] text-white p-[20px]'>
            <div className='lg:flex grid grid-cols-2 lg:gap-0 gap-[20px] justify-around my-[30px]'>
                <div>
                    <Image src={img} alt='test' />
                </div>
                <div>
                    <p className='font-bold '>Product</p>
                    <p className='my-[10px]'>Pricing</p>
                    <p className='my-[10px]'>Overview</p>
                    <p className='my-[10px]'>Browse</p>
                    <p className='my-[10px]'>Accessibility <span className='bg-white text-fuchsia-600 px-[10px] rounded'>BETA</span></p>
                </div>
                <div>
                    <p className='font-bold'>Solutions</p>
                    <p className='my-[10px]'>Brainstorming</p>
                    <p className='my-[10px]'>Ideation</p>
                    <p className='my-[10px]'>Wireframing</p>
                    <p className='my-[10px]'>Research</p>
                </div>
                <div>
                    <p className='font-bold'>Resources</p>
                    <p className='my-[10px]'>Help Center</p>
                    <p className='my-[10px]'>Blog</p>
                    <p className='my-[10px]'>Tutorials</p>
                    <p className='my-[10px]'>FAQs</p>
                </div>
                <div>
                    <p className='font-bold'>Support</p>
                    <p className='my-[10px]'>Contact Us</p>
                    <p className='my-[10px]'>Developers</p>
                    <p className='my-[10px]'>Documentation</p>
                    <p className='my-[10px]'>Integrations</p>
                </div>
                <div>
                    <p className='font-bold'>Company</p>
                    <p className='my-[10px]'>About</p>
                    <p className='my-[10px]'>Press</p>
                    <p className='my-[10px]'>Events</p>
                    <p className='my-[10px]'>Request Demo →</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-[30px]'>
                <p className='lg:block hidden'>uteach @ 2023. All rights reserved.</p>
                <div className='flex gap-[30px]'>
                    <p className='lg:block hidden'>Terms</p>
                    <p className='lg:block hidden'>Privacy</p>
                    <p>Contact</p>
                    <p className='flex gap-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        EN
                    </p>
                    <p className='flex gap-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        EUR
                    </p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer