import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../../api';

const AddTeacherForm = () => {

  const [formData, setFormData] = useState({ ID: '', Name: '', Email: '', Password: '', Department: '', role: 'teacher' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(formData);
      localStorage.setItem('token', data.token);
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user.id;
      const userRole = user.role;
      let navigateUrl = '/dashboard/' + userRole + '/' + userId
      alert("Teacher Registration Successful!")
      navigate(navigateUrl);
    } catch (error) {
      console.error('Register error', error);
    }
  };

  return (
    <div className='flex justify-center flex-col items-center'>
      <h3 className='text-3xl font-bold mb-2'>Add Teacher Details</h3>
      <form onSubmit={handleSubmit} onChange={handleChange} className="bg-[#5500FF] bg-opacity-70 w-[30vw] p-8 rounded-lg space-y-4" encType={'multipart/form-data'}>
        <div>
          <label className="block text-white mb-2">Employee ID</label>
          <input type="text" name='ID' placeholder='ID' className="w-full p-2 rounded-md" />
        </div>
        <div>
          <label className="block text-white mb-2">Password</label>
          <input type="password" name='Password' placeholder='Password' className="w-full p-2 rounded-md" />
        </div>
        <div>
          <label className="block text-white mb-2">Name</label>
          <input type="text" placeholder='Name' name='Name' className="w-full p-2 rounded-md" />
        </div>
        <div>
          <label className="block text-white mb-2">Email</label>
          <input type="email" placeholder='Email' name='Email' className="w-full p-2 rounded-md" />
        </div>
        <div>
          <label className="block text-white mb-2">Department</label>
          <input type="text" placeholder='Department' name='Department' className="w-full p-2 rounded-md" />
        </div>
        <button className='bg-[#2A007E] text-white py-2 w-full rounded-md' type="submit">Register</button>
      </form>
    </div>
  )
}

export default AddTeacherForm