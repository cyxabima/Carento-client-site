import React, { useEffect, useState } from 'react'
import CarItem from '../../components/CarItem'
import CarsData from '/public/CarsData'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { toast } from 'sonner'



function LatestCars() {
    const [carsData, setCarsData] = useState([])

    useEffect(() => {
        // this is an IIFE 
        (async () => {
            fetch("/foo/api/v1/vehicles/cars?limit=7")
                .then((res) => res.json())
                .then((res) => setCarsData(res)).catch((err) => { console.error("Server is not running", err) })
        })();
    }, [])

    return (
        <div className=' bg-black p-4 pb-8'>

            <h1 className='text-5xl text-center p-8  text-primary block font-bold'>Latest Cars</h1>
            <div className='sm:mx-2 mx-10 md:mx-24 '>

                <Carousel>
                    <CarouselContent>
                        {carsData.map((car, index) => <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5" key={index} > <CarItem key={index} carData={car} /> </CarouselItem>)}
                        {/* <CarouselItem>1.<CarItem carData={""}/></CarouselItem> */}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>


        </div>
    )
}

export default LatestCars