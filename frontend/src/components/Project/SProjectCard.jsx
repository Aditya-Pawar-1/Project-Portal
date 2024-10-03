// ProjectCard.jsx
import React from 'react';

const SProjectCard = ({ projectName, projectId, courseName, submissionDate }) => {
  return (
    <div className="bg-[#5500FF] w-[30vw] bg-opacity-70 p-4 rounded-lg">
      <p className="text-white">project Name: {projectName}</p>
      <p className="text-white">project Id: {projectId}</p>
      <p className="text-white">Course Name: {courseName}</p>
      <p className="text-white">Submission Date: {submissionDate}</p>
      <button className="mt-4 bg-[#2A007E] text-white py-2 w-full rounded-md">
        View Project
      </button>
    </div>
  );
};

export default SProjectCard;
