import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Submission from './components/Project/Submission';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AddTeacherForm from './components/Dashboard/AddTeacherForm';
import EditTeacher from './components/Dashboard/EditTeacher';
import CreateProject from './components/Project/CreateProject';
import TeacherHome from './components/Dashboard/TeacherHome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="student/:id" element={<StudentDashboard />} />
          <Route path="teacher/:id" element={<TeacherDashboard />}>
            <Route path="" element={<TeacherHome />}/>
            <Route path="createProject" element={<CreateProject />}/>
          </Route>
          <Route path="admin/:id" element={<AdminDashboard />}>
            <Route path='' element={<EditTeacher />} />
            <Route path="addteacher" element={<AddTeacherForm />} />
          </Route>
        </Route>
        <Route path="/submission" element={<Dashboard />}>
          <Route path="student/:id" element={<Submission />} />
          <Route path="teacher/:id" element={<TeacherDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
