import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../Contexts/AuthContext'

function VendorRoutes() {
    const { isLogged, isVendor } = useAuth()

    if (!isLogged || !isVendor) {
        // replace is used to  make history stack clear
        return <Navigate to={"/login"} replace />
    }

    return (
        <Outlet />
    )
}

export default VendorRoutes