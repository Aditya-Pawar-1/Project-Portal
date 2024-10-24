import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getSubmissionID } from '../../api';

const TProjectList = () => {
    const [fetchedProject, setFetchedProject] = useState(null);
    const navigate = useNavigate();
    let location = useLocation();
    const { projectID } = useParams();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await getSubmissionID(projectID);
                if (response.data.length > 0) {
                    setFetchedProject(response.data);
                } else {
                    console.error("No projects found");
                }
            } catch (err) {
                console.error(err);
                navigate(-1);
            }
        };

        fetchProject();
    }, [projectID, navigate]);

    const handleClick = (studentID) => {
        navigate(location.pathname + '/' + studentID);
    };

    console.log(fetchedProject);

    return (
        <div className=' m-12'>
            <h1 className='text-5xl font-semibold'>Submitted Projects</h1>
            <div className='w-full h-full mx-4 mt-8 flex items-start justify-center flex-wrap'>
                {fetchedProject ? (
                    fetchedProject.map(studentID => (
                        <div key={studentID} className="bg-[rgb(85,0,255)] w-[30vw] flex items-center justify-between bg-opacity-70 p-4 rounded-lg mb-2">
                            <p className="text-white">Student ID: {studentID}</p>
                            <button
                                onClick={() => handleClick(studentID)}
                                className="bg-[#2A007E] w-fit text-white p-2 rounded-md"
                            >
                                View Project
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='text-2xl'>No submissions available.</p>
                )}
            </div>
        </div>
    );
};

export default TProjectList;
