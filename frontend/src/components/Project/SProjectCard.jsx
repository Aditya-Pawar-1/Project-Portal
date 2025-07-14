/* eslint-disable react/prop-types */ 
import { useEffect, useState } from 'react';
import { getOneProject} from '../../api';
import { useNavigate, useLocation } from 'react-router-dom'

const SProjectCard = ({ project }) => {
  const { projectName, PID, submissionDate, department } = project;
  const [fetchedProject, setFetchedProject] = useState(null);
  const SubDate = submissionDate.substring(0, 10);

  const navigate = useNavigate()
  let location = useLocation();
  const handleClick = () => {
    navigate(location.pathname + `/${PID}`)
  }

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
      <p className="text-white">department: {fetchedProject ? fetchedProject.department : department}</p>
      <p className="text-white">Submission Date: {SubDate}</p>
      <button onClick={() => handleClick()} className="mt-4 bg-[#2A007E] text-white py-2 w-full rounded-md">
        View Project
      </button>
    </div>
  );
};

export default SProjectCard;
