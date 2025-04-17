import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiReceiveMoney, GiWallet } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import { FaCalendar } from "react-icons/fa";




function Customers() {
    return (
        <div className='bg-rose-200 p-8  '>
            {/* section Header */}
            <div className='flex
            flex-col'>
                <h1 className='text-5xl text-center   text-primary block font-bold'>Customers</h1>
                <h2 className='text-center text-xl font-bold '>Perks & Privileges</h2>
            </div>

            {/* sections all perks list */}
            <div className='mt-8 grid md:grid-rows-2 md:grid-cols-3'>

                {/* 1st perks */}
                <div className='flex items-center justify-center flex-col p-5'>
                    <div>
                        <GiReceiveMoney className='text-6xl' />
                    </div>
                    <h3 className='font-bold text-primary mt-1'>Wide Selection</h3>
                    <span className='font-bold'> Choose from cars for every need and budget.</span>
                </div>

                {/* 2nd perk */}
                <div className='flex items-center justify-center flex-col p-5'>
                    <div>
                        <RiVerifiedBadgeFill className='text-6xl' />
                    </div>
                    <h3 className='font-bold text-primary mt-1'>Verified Vehicles</h3>
                    <span className='font-bold'>All vehicles are owner-verified for safety and reliability.</span>
                </div>

                {/* 3rd perk */}
                <div className='flex items-center justify-center flex-col p-5'>
                    <div >
                        <FaCalendar className='text-6xl' />
                    </div>
                    <h3 className='font-bold text-primary mt-1'>Flexible Booking</h3>
                    <span className='font-bold'>Rent by the hour, day, or week.</span>
                </div>

                {/* 4th perk */}
                <div className='flex items-center justify-center flex-col p-5'>
                    <div>
                        <ImPriceTags className='text-6xl' />
                    </div>
                    <h3 className='font-bold text-primary mt-1'>Transparent Pricing</h3>
                    <span className='font-bold'> No hidden charges – what you see is what you pay. </span>
                </div>

                {/* 5th perk */}
                <div className='flex items-center justify-center flex-col p-5'>
                    <div>
                        <FaBusinessTime className='text-6xl' />
                    </div>
                    <h3 className='font-bold text-primary mt-1'>24/7 Support</h3>
                    <span className='font-bold'>We’re always here for roadside or rental help.</span>
                </div>

                {/* 6th perk */}
                <div className='flex items-center justify-center flex-col p-5'>
                    <div className=''>
                        <GiWallet className='text-6xl' />
                    </div>
                    <h3 className='font-bold text-primary mt-1'>Digital Wallet</h3>
                    <span className='font-bold'>Manage all payments easily with your Carento Wallet.</span>
                </div>
            </div>

        </div>
    )
}

export default Customers