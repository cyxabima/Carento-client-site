import React from 'react'

function WareHouse() {
    return (
        <div className='p-4 bg-rose-100'>
            <h2 className='text-3xl md:text-4xl text-black block font-bold text-center'> Our Warehouses in Karachi</h2>

            <h3 className=' font-bold mt-5'>We currently operate <span>4 warehouses</span> across the city for convenient drop-offs and pickups: </h3>
            <div className='flex flex-col items-left justify-center p-2'>
                <ul className='list-disc list-inside'>
                    <li>
                        Korangi Industrial Area
                    </li>
                    <li>
                        Gulshan-e-Iqbal Block 5
                    </li>
                    <li>
                        DHA Phase 6
                    </li>
                    <li>
                        North Nazimabad
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default WareHouse