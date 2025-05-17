import React, { useEffect, useState } from 'react'
import CarItem from '../../components/CarItem'
import DashBoardTitle from '../DashBoardComponents/DashBoardTitle'
import { toast } from 'sonner'
import useAuth from '../../Contexts/AuthContext'
import { AiOutlineLoading3Quarters } from "react-icons/ai";



function DashBoard() {


    const { jwtToken } = useAuth();

    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchVendorData = async () => {
            setLoading(true)
            try {
                const response = await fetch('/api/v1/vendors/me', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${jwtToken}`
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ detail: "Error Fetching Data" }));
                    toast.error(errorData.detail);
                    setLoading(false)
                    return;
                }

                const data = await response.json();
                setCarsData(data?.cars);
            } catch (err) {
                toast.error("Network error");
            } finally {
                setLoading(false)
            }
        };

        if (jwtToken) {
            fetchVendorData();
        }

    }, [jwtToken]);




    return (
        <div className='bg-rose-100 p-4 flex flex-col'>
            <DashBoardTitle title={"My Cars"} />

            {loading ? <div className='flex justify-center items-center mt-40'><AiOutlineLoading3Quarters className='text-9xl text-primary block text-center animate-spin' /> </div> : <div className='grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 md:gap-7 shadow-xl rounded-xl  bg-white'>
                {
                    carsData.map((car, index) => <CarItem key={index} carData={car} className={"bg-black"} />)
                }

            </div>}
        </div>
    )
}

export default DashBoard