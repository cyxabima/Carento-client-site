import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Separator } from '../components/ui/separator'

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Separator className=" bg-rose-500 " />

        </>
    )
}

export default Home