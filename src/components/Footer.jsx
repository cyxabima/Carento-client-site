import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



function Footer() {
    return (
        <footer className='flex justify-between items-center p-4 flex-col  shadow-xl shadow-primary '>



            <div className='flex flex-col md:flex-row items-center'>
                <img src="/logo.png" alt="" width={50} />
                <span className='  text-primary text-center'><span className='text-primary'>Carento: Car Rental Service . </span> All rights reserved. &copy; 2025-2026.</span>
            </div>

            <div className='flex gap-2'>
                <FaFacebook className='text-2xl text-primary hover:scale-105 transition-all cursor-pointer' />
                <FaInstagram className='text-2xl text-primary hover:scale-105 transition-all cursor-pointer' />
                <FaLinkedin className='text-2xl text-primary hover:scale-105 transition-all cursor-pointer' />

            </div>

        </footer>
    )
}

export default Footer