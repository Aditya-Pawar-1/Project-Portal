import React, { useState } from 'react';
import { submitProject } from '../../api';

const Submissions = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const studentId = user.id;

  const [formData, setFormData] = useState({
    PID: '',
    githubLink: '',
    presentation: null,
    projectReport: null,
    photographs: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('PID', formData.PID);
    form.append('githubLink', formData.githubLink);
    form.append('presentation', formData.presentation[0]);
    form.append('projectReport', formData.projectReport[0]);
    for (let i = 0; i < formData.photographs.length; i++) {
      form.append('photographs', formData.photographs[i]);
    }

    try {
      await submitProject(form, studentId);
      alert('Project submitted successfully');
    } catch (error) {
      console.error('Submission error', error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-[#5500FF] bg-opacity-70 w-[40vw] p-8 rounded-lg space-y-6"
        encType={'multipart/form-data'}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Submit Your Project</h2>
        <div>
          <label className="block font-semibold text-white mb-2">Project ID</label>
          <input
            type="text"
            name="PID"
            placeholder="Project ID"
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">GitHub Link</label>
          <input
            type="url"
            name="githubLink"
            placeholder="GitHub Link"
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Presentation</label>
          <input
            type="file"
            name="presentation"
            onChange={handleFileChange}
            className="w-full p-2 rounded-md cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Project Report</label>
          <input
            type="file"
            name="projectReport"
            onChange={handleFileChange}
            className="w-full p-2 rounded-md cursor-pointer"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Photographs</label>
          <input
            type="file"
            name="photographs"
            multiple
            onChange={handleFileChange}
            className="w-full p-2 rounded-md cursor-pointer"
          />
        </div>
        <button className="bg-[#2A007E] text-white py-2 w-full rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submissions;
