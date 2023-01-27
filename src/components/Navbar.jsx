import React from 'react'
import { ImMenu3 } from 'react-icons/im'
import { AiOutlineDown } from 'react-icons/ai'
import logo from '../assets/mybrand.svg'

const Navbar = () => {
    return (
        <nav className='flex px-4 my-12 items-center justify-between'>
            <div className='mr-16'>
                <img src={logo} alt="logo" />
            </div>

            <div className='flex gap-8 items-center'>
                <div className='md:flex'>
                    <ImMenu3 className='h-8 w-8 cursor-pointer md:hidden' />
                    <div className='hidden w-full md:flex gap-12 justify-between md:items-center md:mx-auto'>
                        <a className='font-sans text-[17px] text-priBlack leading-5' href="#">Destinations</a>
                        <a className='font-sans text-[17px] text-priBlack leading-5' href="#">Hotels</a>
                        <a className='font-sans text-[17px] text-priBlack leading-5' href="#">Flights</a>
                        <a className='font-sans text-[17px] text-priBlack leading-5' href="#">Bookings</a>
                        <a className='font-sans text-[17px] text-priBlack leading-5' href="#">Login</a>
                        <a className='font-sans text-[17px] text-priBlack leading-5 border-2 border-black rounded-sm py-2 px-4' href="#">Sign up</a>
                    </div>
                </div>
                <div className='flex items-center cursor-pointer'>
                    EN
                    <AiOutlineDown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar