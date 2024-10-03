import React, { useState } from 'react';
import SProjectCard from './SProjectCard';
import { getStudentSubmissions } from '../api';
import { jwtDecode } from "jwt-decode";

const StudentDashboard = () => {
  let token = localStorage.getItem('token')
  const decoded = jwtDecode(token);
  const userId = decoded.user.id;
  const project =  Object.values(getStudentSubmissions(userId))
  console.log(typeof(project));
  

  return (
    <div className="p-8 w-[80vw] mx-14 mt-16">
      <div className='flex justify-between items-center mb-5'>
        <h2 className="text-2xl font-bold mb-6">Your Projects</h2>
        <button className="bg-[#2A007E] text-white py-2 px-6 rounded-md">Submit New Project</button>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-9 mx-10">
        {project ? project.map((project, index) => (
          <SProjectCard />
        ))
          : <h3 className='text-3xl font-bold m-4'>You don't have submitted any project</h3>
        }
      </div>
    </div>
  );
};

export default StudentDashboard;
