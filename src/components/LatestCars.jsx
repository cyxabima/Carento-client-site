import React from 'react'
import CarItem from './CarItem'
import CarsData from '../../public/CarsData'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



function LatestCars() {
    return (
        <div className=' bg-black   p-4'>

            <h1 className='text-5xl text-center p-8  text-primary block font-bold'>Latest Cars</h1>
            <div className='sm:mx-2 mx-10 md:mx-24 '>

                <Carousel>
                    <CarouselContent>
                        {CarsData.map((car, index) => <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 " > <CarItem key={index} carData={car} /> </CarouselItem>)}
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