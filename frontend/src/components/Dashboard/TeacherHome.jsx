import React, { useEffect, useState } from 'react';
import TProjectCard from '../Project/TProjectCard';
import { getProjects } from '../../api';
import { useNavigate } from 'react-router-dom';

const TeacherHome = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [projects, setProjects] = useState([]);    

    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    const userRole = user.role;

    const navigate = useNavigate()

    const handleCreateProject = () => {
        let navigateUrl = '/dashboard/' + userRole + '/' + userId + '/createProject'
        navigate(navigateUrl);
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await getProjects();
                setProjects(response.data);                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-8 w-[80vw] mx-14 mt-16">
            <div className='flex justify-between items-center mb-5'>
                <h2 className="text-2xl font-bold mb-6">Created Projects</h2>
                <button onClick={handleCreateProject} className="bg-[#2A007E] text-white py-2 px-6 rounded-md">Create New Project</button>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 mx-10">
                {projects && projects.map((project, index) => (
                    <TProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default TeacherHome