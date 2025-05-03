import React from 'react'
import { AppSidebar } from '../../components/app-sidebar'
import { SidebarProvider } from '../../components/ui/sidebar'
import { SiteHeader } from '../../components/site-header'
import { Outlet } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"

function DashBoardLayout() {
    return (
        <SidebarProvider>

            <AppSidebar />
            <main className="flex-1 bg-rose-100">
                <SiteHeader />
                <Outlet />
                <Toaster richColors />
            </main>

        </SidebarProvider>
    );
}


export default DashBoardLayout