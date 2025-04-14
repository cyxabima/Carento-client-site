import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Separator } from '../components/ui/separator'
import LatestCars from '../components/LatestCars'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Separator className=" bg-rose-500" />
            <LatestCars/>

        </>
    )
}

export default Home