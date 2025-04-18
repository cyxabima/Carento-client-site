import React from 'react'
import { Button } from '../../components/ui/button'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutUs from '../AboutComponents/AboutUs'
import VendorCenter from '../AboutComponents/VendorCenter'
import WhyCarento from '../AboutComponents/WhyCarento'
import Policy from '../AboutComponents/Policy'
import { Separator } from '../../components/ui/separator'
import WareHouse from '../AboutComponents/WareHouse'

function About() {
    return (
        <>

            <AboutUs />
            <Separator className={"bg-primary w-2"} />

            <VendorCenter />
            <Separator className={"bg-primary"} />
            <Policy />
            <Separator className={"bg-primary"} />
            <WhyCarento />
            <Separator className={"bg-primary"} />
            <WareHouse />
            {/* <Separator className={"bg-primary"} /> */}



        </>
    )
}

export default About

