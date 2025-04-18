import React from 'react'
import Hero from '../HomeComponents/Hero'
import Customers from '../HomeComponents/Customers'
import { Separator } from '../../components/ui/separator'
import LatestCars from '../HomeComponents/LatestCars'
import Vendors from '../HomeComponents/Vendors'

const Home = () => {
    return (
        <div className=''>

            <Hero />
            <Separator className=" bg-primary" />
            <LatestCars />
            <Separator className=" bg-primary" />
            <Customers />
            <Separator className=" bg-primary" />
            <Vendors />
            {/* <Separator className=" bg-primary" /> */}




        </div>
    )
}

export default Home