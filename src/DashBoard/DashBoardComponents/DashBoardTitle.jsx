import React from 'react'

function DashBoardTitle({ title }) {
    return (
        <div className='flex
        flex-col'>
            <h1 className=' text-3xl md:text-5xl text-center text-primary block font-bold pb-4'>{title}</h1>
        </div>
    )
}

export default DashBoardTitle