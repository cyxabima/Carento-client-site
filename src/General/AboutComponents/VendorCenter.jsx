import React from 'react'

function VendorCenter() {
    return (
        <div className='p-8 bg-rose-100'>
            <h2 className='text-3xl md:text-4xl text-black block font-bold text-center'> Vendor-Centered, Hassle-Free</h2>
            <h3 className='text-lg md:text-xl font-bold mt-5'>
                At Carento, your vehicle stays <span className='text-primary'>yours</span> — but <span className='text-primary'>earns for you</span> when it’s not in use.
            </h3>
            <div className='flex flex-col items-left justify-center p-2'>

                <h4 className='font-bold'>
                    Think of us as a <span className='text-primary'>flexible warehouse for your car</span>, where:
                </h4>
                <ul className='list-disc list-inside mt-4'>
                    <li>Your vehicle is parked safely in one of our managed locations.</li>
                    <li>It gets listed on our platform (after submission & approval).</li>
                    <li>You earn income every time it’s rented out.</li>
                    <li>You can take it back whenever you need it, no strings attached.</li>

                </ul>
            </div>
        </div>
    )
}

export default VendorCenter