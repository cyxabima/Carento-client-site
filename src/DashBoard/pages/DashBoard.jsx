import React from 'react'
import { SectionCards } from '../../components/section-cards'
import CarItem from '../../components/CarItem'
import CarsData from '../../../public/CarsData'
import DashBoardTitle from '../DashBoardComponents/DashBoardTitle'

function DashBoard() {
    return (
        <div className='bg-rose-100 p-4'>
            <DashBoardTitle title={"My Cars"}/>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 md:gap-7 shadow-xl rounded-xl  bg-white'>
                {
                    CarsData.slice(0, 3).map((car, index) => <CarItem key={index} carData={car} className={"bg-black"} />)
                }

            </div>
        </div>
    )
}

export default DashBoard