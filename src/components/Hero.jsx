import React from 'react'
import { Button } from './ui/button'

function Hero() {
    return (
        <div className='md:flex bg-rose-100 justify-center items-center'>
            <div className='p-5 md:mt-8 ml-4  '>
                <h1 className='text-3xl font-bold'> “Find or List a Ride with Ease”</h1>
                <h2 className='text-3xl'>Carento connects you with reliable vehicle rentals.</h2>
                <div className='flex gap-4 md:mt-8 float-right'>
                    <Button className={"md:p-3"}>Rent A Car</Button>
                    <Button className={"md:p-3"}>List A Car</Button>
                </div>
            </div>
            <div className='mt-7 md:float-right'>
                <img src="/CarHero.png" />
            </div>


        </div>

    )
}

export default Hero