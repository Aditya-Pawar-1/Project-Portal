import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../api';

const CreateProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: "",
    projectID: "",
    course: "",
    department: "",
    description: "",
    deadline: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject(formData);

      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;

      if (user) {
        const userId = user.id;
        const userRole = user.role;
        let navigateUrl = `/dashboard/${userRole}/${userId}`;
        navigate(navigateUrl);
      } else {
        alert('User not found. Please log in again.');
      }
    } catch (error) {
      console.error('Error during project creation:', error);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className='w-1/2 flex justify-center items-center'>
        <form onSubmit={handleSubmit} className="bg-[#5500FF] bg-opacity-70 w-[60vw] p-8 rounded-lg space-y-2" encType={'multipart/form-data'}>
          <div>
            <label className="block text-white mb-2">Project Name</label>
            <input
              type="text"
              name='projectName'
              value={formData.projectName}
              onChange={handleChange}
              placeholder='Project Name'
              className="w-full p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Project ID</label>
            <input
              type="text"
              name='projectID'
              value={formData.projectID}
              onChange={handleChange}
              placeholder='Project ID'
              className="w-full p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Course</label>
            <input
              type="text"
              name='course'
              value={formData.course}
              onChange={handleChange}
              placeholder='Course'
              className="w-full p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Department</label>
            <input
              type="text"
              name='department'
              value={formData.department}
              onChange={handleChange}
              placeholder='department'
              className="w-full p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Description</label>
            <textarea
              type="text"
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Description (Max 250 characters))'
              rows="4"
              maxLength="250"
              className="w-full p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Deadline</label>
            <input
              type="date"
              name='deadline'
              value={formData.deadline}
              onChange={handleChange}
              className="w-full p-2 rounded-md"
              required
            />
          </div>
          <button className='bg-[#2A007E] text-white py-2 w-full rounded-md' type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
