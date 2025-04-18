import React from 'react'
import { addCarFormSchema } from '../../Schemas/addCarFormSchema'

import AddCarForm from '../DashBoardComponents/AddCarForm'
import DashBoardTitle from '../DashBoardComponents/DashBoardTitle'

function AddCar() {


    return (
        <div className='bg-rose-100 p-4'>
            <DashBoardTitle title={"Add Car"}/>
            <AddCarForm />
        </div>
    )
}

export default AddCar