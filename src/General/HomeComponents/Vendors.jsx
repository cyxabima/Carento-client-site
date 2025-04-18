import React from 'react'
import { MdCarRental } from "react-icons/md";
import { Button } from '../../components/ui/button';




function Vendors() {
    return (
        <div className='bg-foreground p-8  '>
            <div className='flex flex-col'>
                <h1 className='text-5xl text-center   text-primary block font-bold'>Become a Carento Vendor</h1>
                <h2 className='text-center text-xl font-bold text-background'>Turn your vehicle into a source of income.</h2>
            </div>



            <div className='mt-8 grid md:grid-rows-1 md:grid-cols-2 md:items-center'>
                <div className='mt-8'>
                    <h3 className='text-background text-xl'>Got a car, bike, or van that’s just sitting around? Put it to work. With Carento, you can rent out your vehicle to trusted users and earn effortlessly.</h3>
                    <Button className={"float-right mr-10"}>Learn more</Button>
                </div>
                <div className=''>
                    <img src='/vendorCover.png' />
                </div>

            </div>
        </div>
    )
}

export default Vendors