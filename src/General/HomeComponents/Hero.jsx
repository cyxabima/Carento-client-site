import React from 'react'
import { Button } from '../../components/ui/button'
import useAuth from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom';

function Hero() {
    const { isVendor, isLogged } = useAuth();
    const navigate = useNavigate();

    const rentACarHandler = () => {
        if (isVendor || !isLogged) {
            navigate("/login")
        }


        navigate("/search")
    }
    const listACarHandler = () => {

        if (!isVendor || !isLogged) {
            navigate("/login")
        }
        navigate("/vendor-dashboard")
    }

    return (
        <div className='md:flex bg-rose-100 justify-center items-center'>
            <div className='p-5 md:mt-8 ml-4  '>
                <h1 className='text-3xl font-bold'> “Find or List a Ride with Ease”</h1>
                <h2 className='text-3xl'>Carento connects you with reliable vehicle rentals.</h2>
                <div className='flex gap-4 md:mt-8 float-right'>
                    <Button className={"md:p-5 md:text-xl shadow-2xs md:py-6 hover:cursor-pointer"} onClick={rentACarHandler}>Rent A Car</Button>
                    <Button className={"md:p-5 md:text-xl shadow-2xs md:py-6 hover:cursor-pointer"} onClick={listACarHandler}>List A Car</Button>
                </div>
            </div>
            <div className='mt-7 md:float-right'>
                <img src="/CarHero.png" />
            </div>


        </div>

    )
}

export default Hero