import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white max-w-3xl w-full rounded-lg shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-bold border-b border-white pb-4">About Project Portal</h1>
                <p className="text-lg">
                    <span className="font-semibold">Project Portal</span> is a web-based platform built using the <span className="font-semibold">MERN stack (MongoDB, Express.js, React, and Node.js)</span>. It serves as a submission system designed specifically for courses like <span className="font-semibold">PBL (Project-Based Learning)</span> and <span className="font-semibold">DBMS mini-project</span>, etc., requirements.
                </p>
                <p className="text-lg">
                    The portal allows students to submit project-related materials such as <span className="font-semibold">GitHub links, presentations, research papers, and photographs</span> for their courses. It features a role-based system with three main types of users: <span className="font-semibold">Students, Teachers, and Admins</span>.
                </p>
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Key Features:</h2>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Authentication-based access for Students, Teachers, and Admins.</li>
                        <li>Teachers can create projects and set submission deadlines for their courses.</li>
                        <li>Students can submit project details, including a <span className="font-semibold">unique project ID</span>.</li>
                        <li>Admins can manage Teachers and oversee the system.</li>
                        <li>Database-driven using <span className="font-semibold">MongoDB</span> for storing user and project data.</li>
                    </ul>
                </div>
                <p className="text-lg">
                    This project was developed as part of the <span className="font-semibold">DBMS mini-project</span> and <span className="font-semibold">Project-Based Learning</span> curriculum at <span className="font-semibold">K. K. Wagh Institute of Engineering and Research</span>. It aims to streamline the project submission process and facilitate easy management of academic projects.
                </p>
            </div>
        </div>
    );
};

export default About;
