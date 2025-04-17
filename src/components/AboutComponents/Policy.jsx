import React from 'react'
import { IoIosWarning } from "react-icons/io";

function Policy() {
    return (
        <div className='p-8 bg-rose-100'>
            <h2 className='text-4xl text-black block font-bold text-center'>Policy</h2>
            <div className='mt-5'>

                <p>
                    We charge a simple <span className='text-primary font-bold'>10% commission</span> on each successful rental. That’s it. No hidden costs.
                </p>

                <div className='flex gap-4 items-center mt-5 flex-col md:flex-row'> 
                    <IoIosWarning className='text-yellow-500 text-3xl' /> <p className='md:text-lg'><span className='text-yellow-500 font-bold'>Important:</span> Your vehicle will <span className='text-primary font-bold'>not appear in search results</span> until it’s physically submitted to one of our warehouses and verified by our team.</p>
                </div>

            </div>
        </div>

    )
}

export default Policy