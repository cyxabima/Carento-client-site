import React from 'react'

function CarNotFound() {
    return (
        <div className='col-end-3 h-40 flex flex-col items-center justify-center'>
            <h1 className='text-primary font-bold text-2xl text-center'>
                Car Not Found
            </h1>
            <h2 className='text-center'>
                No Car with these filters fond
            </h2>
        </div>
    )
}

export default CarNotFound