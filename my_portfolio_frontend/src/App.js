// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Skills from './Skills';
import Software from './Software';
import Languages from './Languages';
import Accomplishments from './Accomplishments';
import Timeline from './Timeline';
import Education from './Education';
import WorkHistory from './WorkHistory';
import HomePage from './HomePage';
import './App.css';

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/info')
      .then(response => response.json())
      .then(data => {
        setInfo(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to my portfolio - Cole Levy</h1>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/skills">Skills</Link>
            <Link to="/software">Software</Link>
            <Link to="/languages">Languages</Link>
            <Link to="/accomplishments">Accomplishments</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/education">Education</Link>
            <Link to="/work_history">Work History</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/skills" element={<Skills data={info.skills} />} />
            <Route path="/software" element={<Software data={info.software} />} />
            <Route path="/languages" element={<Languages data={info.spoken_languages} />} />
            <Route path="/accomplishments" element={<Accomplishments data={info.accomplishments} />} />
            <Route path="/timeline" element={<Timeline data={info.timeline} />} />
            <Route path="/education" element={<Education data={info.education} />} />
            <Route path="/work_history" element={<WorkHistory data={info.work_history} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
