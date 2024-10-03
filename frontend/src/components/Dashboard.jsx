import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard