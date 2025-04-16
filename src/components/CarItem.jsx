import React from 'react'
import { Separator } from '../components/ui/separator'
import { BsFuelPumpFill } from "react-icons/bs";
import { PiSeatbeltFill } from "react-icons/pi";
import { PiEngineFill } from "react-icons/pi";
import { FaCoins } from "react-icons/fa6";
import { Button } from './ui/button';

function CarItem({ carData }) {
    return (
        <div className=' rounded-3xl border-white border-2 p-4 hover:shadow-md shadow-primary cursor-pointer sm:w-80 md:w-70'>
            {/* {Image of card} */}
            <div className='w-[250px] h-[200px] mx-auto flex items-center justify-center bg-white rounded-xl overflow-hidden hover:shadow-primary  hover:scale-105 transition-all duration-500'>
                <img src={carData?.image} alt="car" />
            </div>

            <div className=' p-4 '>
                {/* Name of Car */}
                <h2 className='font-bold text-lg mb-2 text-primary'>{carData.name}</h2>
                <Separator className={"bg-secondary"} />

                {/* Type */}

                <div className='grid grid-cols-3 mt-5 gap-4'>
                    <div>
                        <BsFuelPumpFill className='text-xl text-secondary ' />
                        <div className='text-secondary'>{carData.fuelType}</div>
                    </div>
                    <div>
                        <PiSeatbeltFill className='text-2xl text-secondary' />
                        <div className='text-secondary'>{carData.siting_capacity}</div>
                    </div>
                    <div>
                        <PiEngineFill className='text-2xl text-secondary' />
                        <div className='text-secondary'>{carData.engine?.length > 6 ? carData.engine?.slice(0, 6) : carData.engine}</div>
                    </div>
                </div>
                {/* <Separator className={"bg-secondary "} /> */}
                {/* view and price */}

                <div className='mt-5 flex items-center justify-between '>
                    <div className='flex gap-2'>
                        <FaCoins className='text-2xl text-secondary' />
                        <div className='text-secondary'>{carData.price_per_day}/ day</div>
                    </div>

                    <div>
                        <Button>View</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarItem