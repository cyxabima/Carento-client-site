import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
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
import { AuthContextProvider } from './Contexts/AuthContextProvider'
import NotFound from './General/Pages/NotFound'
import VendorRoutes from './protectedRoutes/VendorRoutes';
import LoginProtectedRoute from './protectedRoutes/LoginProtectedRoute';
import BrowseCar from './General/Pages/BrowseCar';
import CustomerRoutes from './protectedRoutes/CustomerRoutes';
import CarDetailsPage from './General/Pages/CarDetails';
import MePage from './General/Pages/MePage';


// const router = createBrowserRouter([
//   {
//     path: "/", Component: MainLayout,
//     children: [
//       {
//         path: "/", Component: Home
//       },
//       {
//         path: "/about", Component: About
//       },
//       {
//         path: "/contact", Component: Contact
//       },
//       {
//         path: "/login", Component: Login
//       },
//       {
//         path: "/signup", Component: SignUp
//       },
//     ]
//   },

//   {
//     path: "/vendor-dashboard", Component: DashBoardLayout,
//     children: [
//       { path: "/vendor-dashboard", Component: DashBoard },
//       { path: "/vendor-dashboard/earnings", Component: Earnings },
//       { path: "/vendor-dashboard/add-car", Component: AddCar },
//       { path: "/vendor-dashboard/wallet", Component: Wallet },
//     ]
//   },
//   {
//     path: "*", Component: NotFound

//   }

// ])




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route element={<CustomerRoutes />}>
          <Route path="search" element={<BrowseCar />} />
          <Route path="view-car/:uid" element={<CarDetailsPage />} />
          <Route path="me" element={<MePage />} />
        </Route>

        <Route element={<LoginProtectedRoute />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="signup" element={<SignUp />} />
      </Route>

      {/* Vendor Dashboard layout */}
      <Route element={<VendorRoutes />}>
        <Route path="/vendor-dashboard" element={<DashBoardLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
