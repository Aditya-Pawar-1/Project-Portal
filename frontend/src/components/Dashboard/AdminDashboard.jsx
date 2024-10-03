import React from 'react'
import { FiEdit } from "react-icons/fi";

const AdminDashboard = () => {
    
    return (
        <div className='flex flex-col items-start mt-14 ml-12'>
            <h2 className='text-5xl font-[Poppins] mb-16'>Welcome back</h2>
            <div className="teacherInfo flex flex-col gap-6">
            <div className='w-[60vw] py-2 px-6 flex flex-col justify-between items-start relative bg-neutral-100'>
                <h4 className='text-xl'>Teacher Name:</h4>
                <h4 className='text-xl'>Teacher ID:</h4>
                <p className='bg-[#5500FF] absolute right-4 top-4 p-2 rounded-lg'><FiEdit className='text-white text-xl' /></p>
            </div>
            <div className='w-[60vw] py-2 px-6 flex flex-col justify-between items-start relative bg-neutral-100'>
                <h4 className='text-xl'>Teacher Name:</h4>
                <h4 className='text-xl'>Teacher ID:</h4>
                <p className='bg-[#5500FF] absolute right-4 top-4 p-2 rounded-lg'><FiEdit className='text-white text-xl' /></p>
            </div>
            <div className='w-[60vw] py-2 px-6 flex flex-col justify-between items-start relative bg-neutral-100'>
                <h4 className='text-xl'>Teacher Name:</h4>
                <h4 className='text-xl'>Teacher ID:</h4>
                <p className='bg-[#5500FF] absolute right-4 top-4 p-2 rounded-lg'><FiEdit className='text-white text-xl' /></p>
            </div>
            <div className='w-[60vw] py-2 px-6 flex flex-col justify-between items-start relative bg-neutral-100'>
                <h4 className='text-xl'>Teacher Name:</h4>
                <h4 className='text-xl'>Teacher ID:</h4>
                <p className='bg-[#5500FF] absolute right-4 top-4 p-2 rounded-lg'><FiEdit className='text-white text-xl' /></p>
            </div>
            <div className='w-[60vw] py-2 px-6 flex flex-col justify-between items-start relative bg-neutral-100'>
                <h4 className='text-xl'>Teacher Name:</h4>
                <h4 className='text-xl'>Teacher ID:</h4>
                <p className='bg-[#5500FF] absolute right-4 top-4 p-2 rounded-lg'><FiEdit className='text-white text-xl' /></p>
            </div>
            </div>
        </div>
    )
}

export default AdminDashboard