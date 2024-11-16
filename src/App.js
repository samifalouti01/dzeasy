// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmissionForm from './components/SubmissionForm';
import LandingPage from './components/LandingPage';
import CustomCode from './components/CustomCode';
import Premium from './components/Premium';
import './App.css';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SubmissionForm />} />
      <Route path="/:username/index.html" element={<LandingPage />} />
      <Route path="/custom-code" element={<CustomCode />} />
      <Route path="/premium" element={<Premium />} />
    </Routes>
  </Router>
);

export default App;
