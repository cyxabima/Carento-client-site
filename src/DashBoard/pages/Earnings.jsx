import React from 'react'
import { ChartAreaInteractive } from '../../components/chart-area-interactive'
import DashBoardTitle from '../DashBoardComponents/DashBoardTitle'

function Earnings() {
    return (
        <div className='bg-rose-100 p-4'>
            <DashBoardTitle title={"My Earnings"} />
            <ChartAreaInteractive />
        </div>
    )
}

export default Earnings