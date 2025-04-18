import React from 'react'
import { AppSidebar } from '../../components/app-sidebar'
import { SidebarProvider } from '../../components/ui/sidebar'
import { SiteHeader } from '../../components/site-header'
import { Outlet } from 'react-router-dom'

function DashBoardLayout() {
    return (
        <SidebarProvider>

            <AppSidebar />
            <main className="flex-1 bg-rose-100">
                <SiteHeader />
                <Outlet />
            </main>

        </SidebarProvider>
    );
}


export default DashBoardLayout