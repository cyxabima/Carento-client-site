import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GiReceiveMoney, GiWallet } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import { MdOutlineEditCalendar } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";




function Customers() {
    return (
        <>
            <div className='bg-background'>Customers</div>
            <div>
                Perks & Privileges
                <GiReceiveMoney />
                Wide Selection: Choose from cars, bikes, and buses for every need and budget.

                <RiVerifiedBadgeFill /> Verified Vehicles: All vehicles are owner-verified for safety and reliability.

                i";
                <MdOutlineEditCalendar /> <FaCalendar />
                Flexible Booking: Rent by the hour, day, or week.

                <ImPriceTags /> Transparent Pricing: No hidden charges – what you see is what you pay.

                <FaBusinessTime /> 24/7 Support: We’re always here for roadside or rental help.

                <GiWallet /> Digital Wallet: Manage all payments easily with your Carento Wallet.
            </div>
        </>
    )
}

export default Customers