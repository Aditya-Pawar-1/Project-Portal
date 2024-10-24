import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <div className='w-full flex flex-col items-start mt-14 ml-12'>
            <div className="w-full h-full teacherInfo flex flex-col gap-6">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboard