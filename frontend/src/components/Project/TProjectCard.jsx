import React from 'react';

const TProjectCard = ({ project }) => {
  const { projectName, projectID, course, Department, TotalSubmission } = project;
  return (
    <div className="bg-[rgb(85,0,255)] w-[30vw] bg-opacity-70 p-4 rounded-lg mb-2">
      <p className="text-white">project Name: {projectName}</p>
      <p className="text-white">project Id: {projectID}</p>
      <p className="text-white">Course Name: {course}</p>
      <p className="text-white">Department Name: {Department}</p>
      <p className="text-white">Total Submissions: {TotalSubmission}</p>
      <button className="mt-4 bg-[#2A007E] text-white py-2 w-full rounded-md">
        View Project
      </button>
    </div>
  );
};

export default TProjectCard;
