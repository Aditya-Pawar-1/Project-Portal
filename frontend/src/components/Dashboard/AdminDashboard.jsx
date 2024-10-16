import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <div className='flex flex-col items-start mt-14 ml-12'>
            <h2 className='text-5xl font-[Poppins] mb-16'>Welcome back</h2>
            <div className="teacherInfo flex flex-col gap-6">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboard