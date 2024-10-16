import React, { useEffect, useState } from 'react';
import { getOneProject } from '../../api';

const SProjectCard = ({ project }) => {
  const { projectName, PID, submissionDate, Department } = project;
  const [fetchedProject, setFetchedProject] = useState(null);
  const SubDate = submissionDate.substring(0, 10);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getOneProject(PID);
        setFetchedProject(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProject();
  }, [PID]);

  return (
    <div className="bg-[#5500FF] w-[30vw] bg-opacity-70 p-4 rounded-lg">
      <p className="text-white">Project Name: {fetchedProject ? fetchedProject.projectName : projectName}</p>
      <p className="text-white">Project ID: {PID}</p>
      <p className="text-white">Department: {fetchedProject ? fetchedProject.Department : Department}</p>
      <p className="text-white">Submission Date: {SubDate}</p>
      <button className="mt-4 bg-[#2A007E] text-white py-2 w-full rounded-md">
        View Project
      </button>
    </div>
  );
};

export default SProjectCard;
