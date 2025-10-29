import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './pages/authentication';
import ProjectDashboard from './pages/projectDashboard';
import MainDashboard from './pages/mainDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/dashboard" element={<ProjectDashboard />} />
      <Route path="/main" element={<MainDashboard />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}

export default App;
