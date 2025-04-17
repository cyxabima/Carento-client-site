import React from 'react'
import { Button } from '../components/ui/button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutComponents/AboutUs'
import VendorCenter from '../components/AboutComponents/VendorCenter'
import WhyCarento from '../components/AboutComponents/WhyCarento'
import Policy from '../components/AboutComponents/Policy'
import { Separator } from '../components/ui/separator'
import WareHouse from '../components/AboutComponents/WareHouse'

function About() {
    return (
        <>
            <Header />
            <AboutUs />
            <Separator className={"bg-primary w-2"} />

            <VendorCenter />
            <Separator className={"bg-primary"} />
            <Policy />
            <Separator className={"bg-primary"} />
            <WhyCarento />
            <Separator className={"bg-primary"} />
            <WareHouse />
            <Separator className={"bg-primary"} />

            <Footer />
            
        </>
    )
}

export default About

