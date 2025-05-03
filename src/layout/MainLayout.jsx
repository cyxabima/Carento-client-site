import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Toaster } from "@/components/ui/sonner"

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Toaster richColors />
            <Footer />
        </>
    )
}

export default MainLayout