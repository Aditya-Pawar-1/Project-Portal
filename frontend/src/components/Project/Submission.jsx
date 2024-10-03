import { useState } from 'react';
import { submitProject } from '../../api';

const Submissions = () => {
  const [formData, setFormData] = useState({
    project: '',
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
    form.append('project', formData.project);
    form.append('githubLink', formData.githubLink);
    form.append('presentation', formData.presentation[0]);
    form.append('paper', formData.paper[0]);
    for (let i = 0; i < formData.photographs.length; i++) {
      form.append('photographs', formData.photographs[i]);
    }
    
    try {
      await submitProject(form);
      alert('Project submitted successfully');
    } catch (error) {
      console.error('Submission error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="project" placeholder="Project ID" onChange={handleChange} required />
      <input type="url" name="githubLink" placeholder="GitHub Link" onChange={handleChange} required />
      <input type="file" name="presentation" onChange={handleFileChange} />
      <input type="file" name="paper" onChange={handleFileChange} />
      <input type="file" name="photographs" multiple onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Submissions;
