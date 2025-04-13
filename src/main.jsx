import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyAccount from './pages/MyAccount'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
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
  {
    path: "/my_account", Component: MyAccount
  },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
