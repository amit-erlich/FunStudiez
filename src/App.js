import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewStudySettings from './pages/NewStudySettings';
import Study from "./pages/Study";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/NewStudySettings" element={<NewStudySettings />} />
          <Route path="/Study" element={<Study />} />
        </Routes>
      </Router>
  );
}