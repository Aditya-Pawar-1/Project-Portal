import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { login } from '../api.js'
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {

  const [role, setRole] = useState('Student');

  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      localStorage.setItem('token', data.token);
      const decoded = jwtDecode(data.token);
      const userId = decoded.user.id;
      const userRole = decoded.user.role;
      let navigateUrl = '/dashboard/' + userRole + '/' + userId
      navigate(navigateUrl);
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[80vh]">
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <h2 className="text-6xl font-bold mb-4">Project Portal</h2>
        <p className="text-xl text-gray-500 mb-8">Project submission portal for college</p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <form onSubmit={handleSubmit} onChange={handleChange} className="bg-[#5500FF] bg-opacity-70 w-[30vw] p-8 rounded-lg space-y-6" encType={'multipart/form-data'}>
          <div>
            <label className="block text-white mb-2">Student ID / Employee ID</label>
            <input type="text" name='ID' placeholder='ID' className="w-full p-2 rounded-md" />
          </div>
          <div>
            <label className="block text-white mb-2">Password</label>
            <input type="password" name='Password' placeholder='Password' className="w-full p-2 rounded-md" />
          </div>
          <div className="flex gap-5 items-center text-white">
            <label>
              <input type="radio" name="role" value="Student" checked={role === 'Student'} onChange={() => setRole('Student')} />
              <span className="ml-2">Student</span>
            </label>
            <label>
              <input type="radio" name="role" value="Teacher" checked={role === 'Teacher'} onChange={() => setRole('Teacher')} />
              <span className="ml-2">Teacher</span>
            </label>
          </div>
          <button className='bg-[#2A007E] text-white py-2 w-full rounded-md' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
