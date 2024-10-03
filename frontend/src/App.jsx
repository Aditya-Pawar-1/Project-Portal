import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

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
          <Route path="teacher/:id" element={<TeacherDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
