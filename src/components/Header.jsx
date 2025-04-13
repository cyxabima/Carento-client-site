import React from 'react'
import { Button } from "./ui/button"
const Header = () => {
    const isLogged = false
    return (
        <nav className='flex justify-between p-3 shadow-2xs h-18 items-center'>
            <div className='flex h-full items-center'>
                <img src="/logo.svg" alt="" width={34} height={34} />
                <h3>Rentora Go</h3>

            </div>
            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Contact</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>About</li>
                {isLogged? 
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
                :""}
            </ul>

            {
                isLogged ? <Button> My Account </Button> : <Button> Login </Button>
            }

        </nav>
    )
}

export default Header