import React from 'react'
import SummaryCard from './SummaryCard'
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUser } from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold'> Dashboard Overview </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            <SummaryCard icon={<FaUser />} text="Total Employee" number={13} color="bg-teal-600"/>
            <SummaryCard icon={<FaBuilding />} text="Total Department" number={5} color="bg-yellow-600"/>
            <SummaryCard icon={<FaMoneyBillWave />} text="Monthly Salary" number="$200" color="bg-red-600"/>
        </div>

        <div className='mt-12'>
            <h3 className='text-center text-2xl font-bold'>Leave Details</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <SummaryCard icon={<FaFileAlt />} text="Total Employee" number={13} color="bg-teal-600"/>
            <SummaryCard icon={<FaCheckCircle />} text="Total Department" number={5} color="bg-green-600"/>
            <SummaryCard icon={<FaHourglassHalf />} text="Monthly Salary" number="$200" color="bg-yellow-600"/>
            <SummaryCard icon={<FaTimesCircle />} text="Monthly Salary" number="$200" color="bg-red-600"/>
        </div>
        </div>
    </div>
  )
}

export default AdminSummary