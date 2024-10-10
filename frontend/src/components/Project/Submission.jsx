import { useState } from 'react';
import { submitProject } from '../../api';
import { jwtDecode } from "jwt-decode";

const Submissions = () => {
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token);
  localStorage.setItem('user', JSON.stringify(decoded.user));
  const studentId = decoded.user.id;

  const [formData, setFormData] = useState({
    projectID: '',
    githubLink: '',
    presentation: null,
    paper: null,
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
    form.append('projectID', formData.project);
    form.append('githubLink', formData.githubLink);
    form.append('presentation', formData.presentation[0]);
    form.append('paper', formData.paper[0]);
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="projectID" placeholder="Project ID" onChange={handleChange} required />
      <input type="url" name="githubLink" placeholder="GitHub Link" onChange={handleChange} required />
      <input type="file" name="presentation" onChange={handleFileChange} />
      <input type="file" name="paper" onChange={handleFileChange} />
      <input type="file" name="photographs" multiple onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Submissions;
