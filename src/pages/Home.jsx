import React from 'react'
import Header from '../components/Header'
import Hero from '../components/HomeComponents/Hero'
import Customers from '../components/HomeComponents/Customers'
import { Separator } from '../components/ui/separator'
import LatestCars from '../components/HomeComponents/LatestCars'
import Vendors from '../components/HomeComponents/Vendors'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className=''>
            <Header />
            <Hero />
            <Separator className=" bg-primary" />
            <LatestCars />
            <Separator className=" bg-primary" />
            <Customers />
            <Separator className=" bg-primary" />
            <Vendors />
            <Separator className=" bg-primary" />
            <Footer />



        </div>
    )
}

export default Home