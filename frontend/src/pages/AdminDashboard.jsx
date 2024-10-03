import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import AdminSideBar from '../components/dashboard/AdminSideBar'
import Navbar from '../components/dashboard/Navbar'
import AdminSummary from '../components/dashboard/AdminSummary'
const AdminDashboard = () => {
  const {user} = useAuth()

  return (
    <div className='flex'>
        < AdminSideBar />
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar />
        <AdminSummary />
      </div>
      
    </div>
  )
}

export default AdminDashboard