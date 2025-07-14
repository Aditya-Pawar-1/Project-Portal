import { useState, useEffect } from 'react';
import { getOneProject, getStudentSubmissions, downloadFile } from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const [fetchedProject, setFetchedProject] = useState(null);
  const [fetchedSubmission, setFetchedSubmission] = useState(null);
  const [subDate, setSubDate] = useState('');
  const navigate = useNavigate();
  const { PID, id} = useParams();

  if (PID === null) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { projectID } = useParams();
    // eslint-disable-next-line no-const-assign
    PID = projectID;
  }

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await getOneProject(PID);
        console.log(PID);

        setFetchedProject(response.data);
      } catch (err) {
        console.error(err);
        navigate(-1);
      }
    };

    const fetchSubmission = async () => {
      try {
        const response = await getStudentSubmissions(id);
        setFetchedSubmission(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProject();
    fetchSubmission();
  }, [PID, id, navigate]);

  useEffect(() => {
    if (fetchedSubmission) {
      setSubDate(fetchedSubmission.submissionDate.substring(0, 10));
    }
  }, [fetchedSubmission]);

  const handledownload = async (type, id) => {
    try {
      const response = await downloadFile(type, id);

      // Create a blob from the response data
      const contentDisposition = response.headers['content-disposition'];
      const fileName = contentDisposition
        ? contentDisposition.split('filename=')[1].replace(/"/g, '')
        : `${type}`;

      const blob = new Blob([response.data], { type: response.headers['content-type'] });

      // Create a link element and set its href to the blob
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();

      // Clean up by revoking the object URL
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };


  if (!fetchedProject || !fetchedSubmission) {
    return <div className="flex items-center justify-center min-h-screen w-full text-4xl text-gray-600">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 p-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg w-full max-w-2xl rounded-lg shadow-lg p-6 space-y-4">
        <h4 className="text-2xl font-semibold border-b border-white pb-2 mb-4">Project Details</h4>
        <div className="space-y-2">
          <p>
            <span className="font-bold">Project Name:</span> {fetchedProject.projectName}
          </p>
          <p>
            <span className="font-bold">Project ID:</span> {fetchedProject.projectID}
          </p>
          <p>
            <span className="font-bold">Course:</span> {fetchedProject.course}
          </p>
          <p>
            <span className="font-bold">Department:</span> {fetchedProject.department}
          </p>
          <p>
            <span className="font-bold">Submission Date:</span> {subDate}
          </p>
          <p>
            <span className="font-bold">View On Github:</span>
            <a
              href={fetchedSubmission.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block m-2 px-4 py-1 bg-blue-600 text-white text-md font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
            >
              View Project
            </a>
          </p>
          <div>
            <span className="font-bold">Download Presentation:</span>
            <button
              className="inline-block m-2 px-4 py-1 bg-blue-600 text-white text-md font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
              onClick={() => handledownload('presentation', fetchedSubmission._id)}
            >
              Download Presentation
            </button>
          </div>
          <div>
            <span className="font-bold">Download Report:</span>
            <button
              className="inline-block m-2 px-4 py-1 bg-blue-600 text-white text-md font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
              onClick={() => handledownload('report', fetchedSubmission._id)}
            >
              Download Report
            </button>
          </div>
          <div>
            <span className="font-bold">Download Photos:</span>
            <button
              className="inline-block m-2 px-4 py-1 bg-blue-600 text-white text-md font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
              onClick={() => handledownload('photo', fetchedSubmission._id)}
            >
              Download Photo
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
