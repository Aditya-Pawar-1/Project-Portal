// ProjectCard.jsx
import React from 'react';

const SProjectCard = ({ project }) => {

  // const { projectName, projectId, Department, submissionDate } = project;
  const { projectName, projectID, submissionDate } = project;
  

  return (
    <div className="bg-[#5500FF] w-[30vw] bg-opacity-70 p-4 rounded-lg">
      <p className="text-white">project Name: {projectName}</p>
      <p className="text-white">project ID: {projectID}</p>
      {/* <p className="text-white">Department: {Department}</p> */}
      <p className="text-white">Submission Date: {submissionDate}</p>
      <button className="mt-4 bg-[#2A007E] text-white py-2 w-full rounded-md">
        View Project
      </button>
    </div>
  );
};

export default SProjectCard;
