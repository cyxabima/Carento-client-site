import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './General/Pages/Home'
import Login from './General/Pages/Login'
import SignUp from './General/Pages/SignUp'
import MyAccount from './General/Pages/MyAccount'
import About from './General/Pages/About'
import Contact from './General/Pages/Contact'
import MainLayout from './layout/MainLayout'
import DashBoardLayout from './DashBoard/pages/DashBoardLayout'
import DashBoard from './DashBoard/pages/DashBoard'
import Earnings from './DashBoard/pages/Earnings'
import Wallet from './DashBoard/pages/Wallet'
import AddCar from './DashBoard/pages/AddCar'


const router = createBrowserRouter([
  {
    path: "/", Component: MainLayout,
    children: [
      {
        path: "/", Component: Home
      },
      {
        path: "/about", Component: About
      },
      {
        path: "/contact", Component: Contact
      },
      {
        path: "/login", Component: Login
      },
      {
        path: "/signup", Component: SignUp
      },
    ]
  },

  {
    path: "/vendor-dashboard", Component: DashBoardLayout,
    children: [
      { path: "/vendor-dashboard", Component: DashBoard },
      { path: "/vendor-dashboard/earnings", Component: Earnings },
      { path: "/vendor-dashboard/add-car", Component: AddCar },
      { path: "/vendor-dashboard/wallet", Component: Wallet },
    ]
  },
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
