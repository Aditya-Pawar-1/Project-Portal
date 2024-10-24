import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api.js';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ID: '', Password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);

      if (!data || !data.token || !data.user) {
        throw new Error('Invalid login response');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); // Save user data

      const userString = localStorage.getItem('user');
      const user = userString ? JSON.parse(userString) : null;

      if (user) {
        const userId = user.id;
        const userRole = user.role;
        let navigateUrl = '/dashboard/' + userRole + '/' + userId;
        navigate(navigateUrl);
      } else {
        alert('User not found. Please log in again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert(error.message);
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
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="w-full p-2 rounded-md"
              autoComplete="current-password"
            />
          </div>
          <button className='bg-[#2A007E] text-white py-2 w-full rounded-md' type="submit">Login</button>
          <Link className='font-semibold text-white' to={'/register'}>Are you new user? Register Now </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
