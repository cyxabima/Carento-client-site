import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../Contexts/AuthContext'

function CustomerRoutes() {
    const { isLogged, isVendor } = useAuth()

    if (!isLogged || isVendor) {
        return <Navigate to={"/login"} replace />
    }

    return (
        <Outlet />
    )
}

export default CustomerRoutes