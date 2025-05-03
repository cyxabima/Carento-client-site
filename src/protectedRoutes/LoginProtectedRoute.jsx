import React from 'react'
import useAuth from '../Contexts/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'

function LoginProtectedRoute() {

    const { isVendor, isLogged, setIsLogged, setIsVendor } = useAuth()
    const navigate = useNavigate()

    const loginHandler = () => {
        setIsLogged(false)
        navigate("/login")
    }

    if (!isLogged) {
        return (
            <Outlet />
        )
    }

    return (
        <div className='w-full h-[82vh] flex flex-col items-center justify-center gap-2.5 bg-rose-100'>
            <h1 className='font-extrabold text-4xl'>You are login as {isVendor ? "Vendor" : "Customer"}</h1>
            <p className='text-xl'>Would you like to loggedIn as {isVendor ? "Customer" : "Vendor"}</p>
            <Button onClick={loginHandler} >Login As {isVendor ? "Customer" : "Vendor"}</Button>
        </div>
    )

}

export default LoginProtectedRoute