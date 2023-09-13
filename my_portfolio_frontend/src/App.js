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
import './index.css'; // Importing Tailwind CSS

function App() {
  const [info, setInfo] = useState({});

  // Fetch data from Flask backend
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
      <div className="App bg-gray-100">
        <header className="bg-blue-500 text-white p-4">
        <i className="fas fa-user-circle"></i> Cole Levy's Portfolio
          <nav className="space-x-4">
            <Link className="text-white" to="/">Home</Link> |
            <Link className="text-white" to="/education">Education</Link> |
            <Link className="text-white" to="/work_history">Work History</Link> |
            <Link className="text-white" to="/timeline">Timeline</Link> |
            <Link className="text-white" to="/software">Software</Link> |
            <Link className="text-white" to="/languages">Spoken Languages</Link> |
            <Link className="text-white" to="/skills">Skills</Link> |
            <Link className="text-white" to="/accomplishments">Accomplishments</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/skills" element={<Skills data={info.skills || []} />} />
            <Route path="/software" element={<Software data={info.software || []} />} />
            <Route path="/languages" element={<Languages data={info.spoken_languages || []} />} />
            <Route path="/accomplishments" element={<Accomplishments data={info.accomplishments || []} />} />
            <Route path="/timeline" element={<Timeline data={info.timeline || []} />} />
            <Route path="/education" element={<Education data={info.education || []} />} />
            <Route path="/work_history" element={<WorkHistory data={info.work_history || []} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
