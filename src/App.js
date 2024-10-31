// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmissionForm from './components/SubmissionForm';
import LandingPage from './components/LandingPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SubmissionForm />} />
      <Route path="/:username/index.html" element={<LandingPage />} />
    </Routes>
  </Router>
);

export default App;
