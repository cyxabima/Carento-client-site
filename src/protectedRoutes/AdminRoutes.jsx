import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import useAuth from '../Contexts/AuthContext'

function AdminRoutes() {
    const { isLogged, isAdmin} = useAuth()

    if (!isLogged || !isAdmin) {
        // replace is used to  make history stack clear
        return <Navigate to={"/login"} replace />
    }

    return (
        <Outlet />
    )
}

export default AdminRoutes