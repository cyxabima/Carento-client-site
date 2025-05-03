import React from 'react'
import {Button} from '../../components/ui/button'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='flex items-center justify-center w-[100vw] flex-col h-[100vh] gap-4 bg-rose-100'>
            <h1 className='text-primary font-bold text-4xl'>404 Page Not Found</h1>
            <p>Sorry, we couldn't find the page you're looking for.</p>
            <Button><Link to={"/"}>Return to Website</Link></Button>


        </div>
    )
}

export default NotFound