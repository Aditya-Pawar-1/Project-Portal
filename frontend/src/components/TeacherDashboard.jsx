import React, { useState } from 'react';
import TProjectCard from './TProjectCard';
import { getProjects } from '../api';

const TeacherDashboard = () => {
  const project = getProjects();
  
  return (
    <div className="p-8 w-[80vw] mx-14 mt-16">
      <div className='flex justify-between items-center mb-5'>
        <h2 className="text-2xl font-bold mb-6">Created Projects</h2>
        <button className="bg-[#2A007E] text-white py-2 px-6 rounded-md">Create New Project</button>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2 mx-10">
        {project.map((project, index) => (
          <TProjectCard /> 
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
