import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchComponents/SearchBar'
import { toast } from 'sonner'
import CarItem from '../../components/CarItem'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import CarNotFound from '../SearchComponents/CarNotFound'



function BrowseCar() {
    const [allCars, setAllCars] = useState([])

    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState(null)

    const [price_lt, setPrice_lt] = useState(10000)
    const [price_gt, setPrice_gt] = useState(0)


    const [fuel_type, setFuel_type] = useState(null)
    const [transmission, setTransmission] = useState(null)


    const getAllCars = async () => {
        try {

            let url = `/api/v1/vehicles/cars?limit=10&offset=0`

            if (search != null && search != "") url += `&search=${search}`
            if (price_gt != null && price_gt != "") url += `&price_gt=${price_gt}`
            if (price_lt != null && price_lt != "") url += `&price_lt=${price_lt}`
            if (transmission != null) url += `&transmission=${transmission}`
            if (fuel_type != null) url += `&fuel_type=${fuel_type}`
            setLoading(true)

            const response = await fetch(url)
            if (!response.ok) {
                const errorData = await response.json().catch(() => { detail: "Error loading cars" })
                toast.error(errorData.detail || "error Fetching Cars")
                setLoading(false)
                return
            }

            const carsData = await response.json()
            setLoading(false)
            setAllCars(carsData)
        } catch (err) {
            toast.error("Something Went wrong")

        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getAllCars()
    }, [price_gt, price_lt, fuel_type, transmission])


    const searchHandler = () => {
        getAllCars()
    }


    return (
        <div className='bg-rose-100  p-6 flex flex-col items-center'>

            <h1 className='text-center font-bold text-5xl mb-10'>Browse Your Car</h1>

            <SearchBar
                setSearch={setSearch}
                setFuel_type={setFuel_type}
                setTransmission={setTransmission}
                setPrice_gt={setPrice_gt}
                setPrice_lt={setPrice_lt}
                price_lt={price_lt}
                price_gt={price_gt}
                searchHandler={searchHandler}
                loading={loading} />


            {loading ? <div className='flex justify-center items-center mt-40'><AiOutlineLoading3Quarters className='text-9xl text-primary block text-center animate-spin' /> </div> : <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 md:gap-7 shadow-xl rounded-xl mt-10 bg-white'>
                {allCars.length == 0 ? <CarNotFound /> :
                    allCars.map((car, index) => <CarItem key={index} carData={car} className={"bg-black"} url={`/view-car/${car.uid}`} />)

                }

            </div>}

        </div>




    )
}

export default BrowseCar